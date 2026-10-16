'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CHORD_SHAPES, frequencyForFret, type ChordShape } from '@/lib/musicTheory';
import { useAudioEngine } from '@/lib/useAudioEngine';

// A classic I-V-vi-IV-style progression built entirely from the open-chord
// shapes already modeled in musicTheory.ts -- no new chord data invented
// for this component.
const PROGRESSION_IDS = ['g-major-open', 'd-major-open', 'a-minor-open', 'c-major-open'];

const GLOW_CYCLE: Array<'amber' | 'teal' | 'violet'> = ['amber', 'teal', 'violet'];

const GLOW_BORDER: Record<string, string> = {
  amber: 'border-amber-glow/60 shadow-amber-glow',
  teal: 'border-teal-glow/60 shadow-teal-glow',
  violet: 'border-violet-glow/60 shadow-violet-glow',
};

const GLOW_TEXT: Record<string, string> = {
  amber: 'text-amber-glow',
  teal: 'text-teal-glow',
  violet: 'text-violet-glow',
};

export default function ProgressionTracker() {
  const { unlockAudio, playFrequency } = useAudioEngine();
  const [playingId, setPlayingId] = useState<string | null>(null);

  const progression = PROGRESSION_IDS
    .map((id) => CHORD_SHAPES.find((shape) => shape.id === id))
    .filter((shape): shape is ChordShape => Boolean(shape));

  function playChord(shape: ChordShape) {
    unlockAudio();
    // Strumming is staggered a few milliseconds per string -- a real
    // strum is never perfectly simultaneous, and the stagger is what
    // keeps six oscillators starting in the same frame from summing
    // into an audible transient spike.
    shape.positions.forEach((position, i) => {
      const frequency = frequencyForFret(position.stringIndex, position.fret);
      window.setTimeout(() => playFrequency(frequency, 1.1), i * 18);
    });
    setPlayingId(shape.id);
    window.setTimeout(() => setPlayingId((current) => (current === shape.id ? null : current)), 700);
  }

  return (
    <div className="flex flex-wrap items-stretch gap-4 sm:gap-5">
      {progression.map((shape, index) => {
        const glow = GLOW_CYCLE[index % GLOW_CYCLE.length];
        const isPlaying = playingId === shape.id;
        return (
          <motion.button
            key={shape.id}
            type="button"
            onClick={() => playChord(shape)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            className={`glass-panel relative flex min-w-[120px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl border px-5 py-6 transition-shadow duration-300 ${GLOW_BORDER[glow]}`}
          >
            {isPlaying && (
              <span
                className={`pointer-events-none absolute inset-0 rounded-2xl ${GLOW_TEXT[glow]} animate-ripple`}
                aria-hidden="true"
              />
            )}
            <span className={`font-display text-2xl font-black ${GLOW_TEXT[glow]}`}>{shape.rootNote}</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              {shape.name.replace(' (Open)', '')}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
