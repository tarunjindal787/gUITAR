'use client';

import { useState } from 'react';
import Fretboard from '@/components/Fretboard';
import ScaleSelector from '@/components/ScaleSelector';
import type { NoteName } from '@/lib/musicTheory';

/**
 * Component Blueprint
 * --------------------
 * This page owns the shared state (`rootNote`, `scaleId`, `numFrets`) that
 * both the visual fretboard and the audio engine react to. Lifting state up
 * to this single source of truth -- rather than letting Fretboard own it
 * internally -- is what lets a future tab player or metronome drive the
 * same fretboard without prop-drilling through it: any sibling component
 * added later subscribes to the same state here and the fretboard simply
 * re-renders. The audio engine itself (`useAudioEngine`, used inside
 * Fretboard) is intentionally *not* lifted to this level: it holds no
 * state that the UI needs to read, only an imperative `playFrequency`
 * capability, so keeping it local to the component that triggers playback
 * avoids an unnecessary context provider for a single consumer.
 */
export default function PracticePage() {
  const [rootNote, setRootNote] = useState<NoteName>('E');
  const [scaleId, setScaleId] = useState('minor-pentatonic');
  const [numFrets, setNumFrets] = useState(15);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16">
      <a
        href="/gUITAR/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-amber-glow"
      >
        &larr; Back to Mountain Culture Guitar Lessons
      </a>

      <header className="mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-glow">Free Practice Tool</p>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Fretboard Explorer
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
          Pick a root note and a scale to see every matching note light up across the neck. Hover or tap a
          note for its name, interval, and a suggested finger. Click it to hear the pitch.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slateLine bg-slateSurface/40 p-5 sm:p-6">
        <ScaleSelector rootNote={rootNote} scaleId={scaleId} onRootChange={setRootNote} onScaleChange={setScaleId} />

        <div className="mt-6 flex items-center gap-4">
          <label htmlFor="fret-count" className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Frets shown
          </label>
          <input
            id="fret-count"
            type="range"
            min={5}
            max={24}
            value={numFrets}
            onChange={(e) => setNumFrets(Number(e.target.value))}
            className="h-2 w-40 cursor-pointer accent-amber-glow"
          />
          <span className="w-6 text-sm font-semibold text-white">{numFrets}</span>
        </div>
      </section>

      <Fretboard rootNote={rootNote} scaleId={scaleId} numFrets={numFrets} />
    </main>
  );
}
