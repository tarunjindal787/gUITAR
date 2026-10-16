'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTE_NAMES, SCALES, type NoteName } from '@/lib/musicTheory';
import MagneticButton from './MagneticButton';

export interface FloatingControlPanelProps {
  rootNote: NoteName;
  scaleId: string;
  onRootChange: (note: NoteName) => void;
  onScaleChange: (scaleId: string) => void;
}

/**
 * A frosted-glass panel that floats above the hero and expands/collapses
 * with a spring. Collapsed, it shows the current key + scale as a compact
 * summary pill; expanded, it reveals the full root/scale controls plus a
 * (currently fixed) tuning readout.
 */
export default function FloatingControlPanel({
  rootNote,
  scaleId,
  onRootChange,
  onScaleChange,
}: FloatingControlPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const activeScale = SCALES.find((s) => s.id === scaleId);

  return (
    <motion.div
      layout
      className="glass-panel w-full max-w-md rounded-3xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] sm:p-6"
      transition={{ layout: { type: 'spring', stiffness: 260, damping: 28 } }}
    >
      <motion.button
        layout="position"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Key &amp; Scale</p>
          <p className="font-display text-lg font-black text-white">
            {rootNote} <span className="text-teal-glow">{activeScale?.name}</span>
          </p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
          aria-hidden="true"
        >
          &#9660;
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Root Note</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {NOTE_NAMES.map((note) => {
                  const active = note === rootNote;
                  return (
                    <button
                      key={note}
                      type="button"
                      onClick={() => onRootChange(note)}
                      aria-pressed={active}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        active
                          ? 'bg-amber-glow text-slate-950 shadow-amber-glow'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {note}
                    </button>
                  );
                })}
              </div>

              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scale / Mode</p>
              <select
                value={scaleId}
                onChange={(e) => onScaleChange(e.target.value)}
                className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-teal-glow"
              >
                {SCALES.map((scale) => (
                  <option key={scale.id} value={scale.id} className="bg-slateSurface">
                    {scale.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Tuning</p>
                  <p className="text-sm font-semibold text-white">Standard (E A D G B E)</p>
                </div>
                <span className="rounded-full bg-violet-glow/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-glow">
                  Only option
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
