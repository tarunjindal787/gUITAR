'use client';

import { motion } from 'framer-motion';
import { NOTE_NAMES, SCALES, type NoteName } from '@/lib/musicTheory';

export interface ScaleSelectorProps {
  rootNote: NoteName;
  scaleId: string;
  onRootChange: (note: NoteName) => void;
  onScaleChange: (scaleId: string) => void;
}

export default function ScaleSelector({ rootNote, scaleId, onRootChange, onScaleChange }: ScaleSelectorProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Root Note</p>
        <div className="flex flex-wrap gap-2">
          {NOTE_NAMES.map((note) => {
            const active = note === rootNote;
            return (
              <button
                key={note}
                type="button"
                onClick={() => onRootChange(note)}
                aria-pressed={active}
                className={`relative rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                  active ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="root-note-highlight"
                    className="absolute inset-0 rounded-lg bg-amber-glow shadow-amber-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{note}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="sm:w-72">
        <label htmlFor="scale-select" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
          Scale / Mode
        </label>
        <select
          id="scale-select"
          value={scaleId}
          onChange={(e) => onScaleChange(e.target.value)}
          className="w-full rounded-lg border border-slateLine bg-slateCard px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-amber-glow"
        >
          {SCALES.map((scale) => (
            <option key={scale.id} value={scale.id}>
              {scale.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
