'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Minimal polyphonic synth engine shared between the fretboard visualizer
 * and (in a future pass) the tab player / metronome. A single AudioContext
 * is created lazily on first user gesture and reused for the component's
 * lifetime -- see Edge Cases in the chat response for why.
 */
export function useAudioEngine() {
  const contextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  // Tracks currently-ringing voices so overlapping notes on the same pitch
  // don't stack gain nodes indefinitely (a real source of audio clipping).
  const activeVoicesRef = useRef<Set<OscillatorNode>>(new Set());

  const ensureContext = useCallback((): AudioContext => {
    if (!contextRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx: AudioContext = new AudioCtx();
      const masterGain = ctx.createGain();
      // Headroom: with up to 6 strings ringing at once, summing six
      // full-amplitude oscillators would clip. 0.18 per voice keeps the
      // mixed signal comfortably under 0 dBFS even at full polyphony.
      masterGain.gain.value = 0.18;
      masterGain.connect(ctx.destination);
      contextRef.current = ctx;
      masterGainRef.current = masterGain;
    }
    return contextRef.current;
  }, []);

  // Browsers (Chrome, Safari, mobile browsers in particular) suspend new
  // AudioContexts until a user gesture resumes them. Calling resume()
  // inside the same click handler that creates the context satisfies the
  // "user gesture" requirement; calling it on mount would silently no-op.
  const unlockAudio = useCallback(() => {
    const ctx = ensureContext();
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
  }, [ensureContext]);

  const playFrequency = useCallback(
    (frequency: number, durationSeconds = 0.9) => {
      const ctx = ensureContext();
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }
      const masterGain = masterGainRef.current!;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = 'triangle'; // Closer to a plucked-string timbre than a bare sine.
      osc.frequency.setValueAtTime(frequency, now);

      // A second, quieter oscillator one octave up adds harmonic
      // brightness without the harsh edge of a sawtooth -- a cheap
      // approximation of a steel-string's overtone content.
      const overtone = ctx.createOscillator();
      overtone.type = 'sine';
      overtone.frequency.setValueAtTime(frequency * 2, now);

      const voiceGain = ctx.createGain();
      const overtoneGain = ctx.createGain();
      overtoneGain.gain.value = 0.3;

      // ADSR-style envelope prevents the click/pop of starting or
      // stopping a waveform mid-cycle (the other common source of
      // "clipping"-sounding audio artifacts in Web Audio synths).
      const attack = 0.01;
      const decay = 0.25;
      const sustainLevel = 0.4;
      const release = 0.35;

      voiceGain.gain.setValueAtTime(0, now);
      voiceGain.gain.linearRampToValueAtTime(1, now + attack);
      voiceGain.gain.linearRampToValueAtTime(sustainLevel, now + attack + decay);
      voiceGain.gain.setValueAtTime(sustainLevel, now + durationSeconds - release);
      voiceGain.gain.linearRampToValueAtTime(0, now + durationSeconds);

      osc.connect(voiceGain);
      overtone.connect(overtoneGain);
      overtoneGain.connect(voiceGain);
      voiceGain.connect(masterGain);

      osc.start(now);
      overtone.start(now);
      osc.stop(now + durationSeconds + 0.05);
      overtone.stop(now + durationSeconds + 0.05);

      activeVoicesRef.current.add(osc);
      osc.onended = () => {
        activeVoicesRef.current.delete(osc);
        osc.disconnect();
        overtone.disconnect();
        voiceGain.disconnect();
        overtoneGain.disconnect();
      };
    },
    [ensureContext]
  );

  // Hard-cap polyphony so a rapid flurry of hover/click events (a real
  // possibility while sweeping across the fretboard) can't spawn an
  // unbounded number of oscillators and overload the audio thread.
  const MAX_VOICES = 12;
  const playFrequencyThrottled = useCallback(
    (frequency: number, durationSeconds?: number) => {
      if (activeVoicesRef.current.size >= MAX_VOICES) return;
      playFrequency(frequency, durationSeconds);
    },
    [playFrequency]
  );

  useEffect(() => {
    const ctx = contextRef.current;
    return () => {
      ctx?.close().catch(() => {
        /* already closed; ignore */
      });
    };
  }, []);

  return { unlockAudio, playFrequency: playFrequencyThrottled };
}
