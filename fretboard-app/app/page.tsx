'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Fretboard from '@/components/Fretboard';
import FloatingControlPanel from '@/components/FloatingControlPanel';
import ProgressionTracker from '@/components/ProgressionTracker';
import MagneticButton from '@/components/MagneticButton';
import type { NoteName } from '@/lib/musicTheory';

/**
 * Component Blueprint
 * --------------------
 * This page owns the shared state (`rootNote`, `scaleId`, `numFrets`) that
 * both the visual fretboard and the audio engine react to. Lifting state up
 * to this single source of truth -- rather than letting Fretboard own it
 * internally -- is what lets the floating control panel, and any future
 * tab player or metronome, drive the same fretboard without prop-drilling
 * through it: any sibling component subscribes to the same state here and
 * the fretboard simply re-renders. The audio engine itself (`useAudioEngine`)
 * is intentionally *not* lifted to this level: it holds no state the UI
 * needs to read, only an imperative `playFrequency` capability, so it's
 * instantiated locally in every component that needs to trigger playback
 * (Fretboard, ProgressionTracker) rather than threaded through a context
 * provider for what is, functionally, a fire-and-forget side effect.
 */
export default function PracticePage() {
  const [rootNote, setRootNote] = useState<NoteName>('E');
  const [scaleId, setScaleId] = useState('minor-pentatonic');
  const [numFrets, setNumFrets] = useState(15);

  return (
    <main className="relative mx-auto min-h-screen max-w-6xl overflow-hidden px-4 py-12 sm:px-8 sm:py-16">
      {/* Ambient glowing background blobs -- pure CSS animation (not
          Framer Motion) since they never respond to state or interaction;
          reaching for a JS-driven animation here would just be a slower
          way to do what `animate-drift` already does on the compositor. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="animate-drift absolute -left-32 -top-20 h-[32rem] w-[32rem] rounded-full bg-amber-deep/20 blur-[120px]" />
        <div className="animate-drift-slow absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-deep/20 blur-[120px]" />
        <div className="animate-drift absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-deep/20 blur-[130px]" style={{ animationDelay: '-7s' }} />
      </div>

      <a
        href="/gUITAR/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-amber-glow"
      >
        &larr; Back to Mountain Culture Guitar Lessons
      </a>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-glow">Free Practice Tool</p>
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-6xl">
          Fretboard <span className="text-amber-glow">Explorer</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
          Pick a key and scale, watch the neck light up, and strum a real chord progression -- all synthesized
          live in your browser.
        </p>
      </motion.header>

      {/* Floating control panel, centered above the board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 flex justify-center"
      >
        <FloatingControlPanel
          rootNote={rootNote}
          scaleId={scaleId}
          onRootChange={setRootNote}
          onScaleChange={setScaleId}
        />
      </motion.div>

      {/* Interactive fretboard */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-slate-300">
            The Neck
          </h2>
          <div className="flex items-center gap-3">
            <label htmlFor="fret-count" className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Frets
            </label>
            <input
              id="fret-count"
              type="range"
              min={5}
              max={24}
              value={numFrets}
              onChange={(e) => setNumFrets(Number(e.target.value))}
              className="h-1.5 w-32 cursor-pointer accent-amber-glow"
            />
            <span className="w-6 text-sm font-semibold text-white">{numFrets}</span>
          </div>
        </div>
        <Fretboard rootNote={rootNote} scaleId={scaleId} numFrets={numFrets} />
      </motion.section>

      {/* Chord progression tracker */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="mb-4 font-display text-lg font-bold uppercase tracking-wide text-slate-300">
          Progression Tracker
        </h2>
        <p className="mb-5 text-sm text-slate-500">
          A classic G &ndash; D &ndash; Am &ndash; C progression. Tap a card to strum it.
        </p>
        <ProgressionTracker />
      </motion.section>

      {/* CTA back to the main site */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <MagneticButton glow="amber" onClick={() => (window.location.href = '/gUITAR/#pricing')}>
          Book A Real Lesson
        </MagneticButton>
      </motion.div>
    </main>
  );
}
