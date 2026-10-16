'use client';

import { useMemo, useState, useCallback, useId, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  STANDARD_TUNING,
  INTERVAL_LABELS,
  getScaleById,
  intervalFromRoot,
  isPitchInScale,
  noteNameToIndex,
  indexToNoteName,
  pitchClassForFret,
  frequencyForFret,
  type NoteName,
} from '@/lib/musicTheory';
import { useAudioEngine } from '@/lib/useAudioEngine';

export interface FretboardProps {
  rootNote: NoteName;
  scaleId: string;
  /** 1-24. Defaults to 15, a realistic practice range; pass 24 for full neck. */
  numFrets?: number;
  className?: string;
}

// --- Fretboard geometry -----------------------------------------------------
// Real guitars space frets by the twelfth-root-of-two rule, not evenly; a
// fretboard diagram that ignores this reads as subtly "wrong" to anyone who
// actually plays. SCALE_LENGTH is an arbitrary virtual unit (not millimeters)
// chosen so the rendered proportions look like a real neck.
const SCALE_LENGTH = 920;
const NUT_MARGIN = 36;
const END_MARGIN = 48;
const STRING_GAP = 34;
const TOP_MARGIN = 28;
const BOTTOM_MARGIN = 28;
const SINGLE_DOT_FRETS = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
const DOUBLE_DOT_FRETS = new Set([12, 24]);

function fretDistanceFromNut(fret: number): number {
  return SCALE_LENGTH * (1 - 1 / Math.pow(2, fret / 12));
}

interface VisibleNote {
  stringIndex: number;
  fret: number;
  pitchClass: number;
  interval: number;
  isRoot: boolean;
  x: number;
  y: number;
}

export default function Fretboard({ rootNote, scaleId, numFrets = 15, className }: FretboardProps) {
  const clampedFrets = Math.min(24, Math.max(1, numFrets));
  const scale = useMemo(() => getScaleById(scaleId), [scaleId]);
  const rootIndex = useMemo(() => noteNameToIndex(rootNote), [rootNote]);
  const { unlockAudio, playFrequency } = useAudioEngine();
  const gradientId = useId();

  const [hovered, setHovered] = useState<VisibleNote | null>(null);

  // Mouse-parallax tilt: the board gently rotates toward the cursor within
  // its own bounds, springing back to flat on leave. Capped at a few
  // degrees so it reads as "drifting," not as a disorienting 3D flip.
  const tiltContainerRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleBoardMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltContainerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }, [pointerX, pointerY]);

  const handleBoardMouseLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  const fretXPositions = useMemo(() => {
    const positions: number[] = [0];
    for (let fret = 1; fret <= clampedFrets; fret += 1) {
      positions.push(NUT_MARGIN + fretDistanceFromNut(fret));
    }
    return positions;
  }, [clampedFrets]);

  const boardWidth = NUT_MARGIN + fretDistanceFromNut(clampedFrets) + END_MARGIN;
  const boardHeight = TOP_MARGIN + STRING_GAP * (STANDARD_TUNING.length - 1) + BOTTOM_MARGIN;

  const stringY = useCallback((stringIndex: number) => {
    // stringIndex 0 (low E) renders at the bottom, matching how a player
    // looking down at their own neck actually sees the strings stacked.
    const visualRow = STANDARD_TUNING.length - 1 - stringIndex;
    return TOP_MARGIN + visualRow * STRING_GAP;
  }, []);

  const fretCenterX = useCallback(
    (fret: number) => {
      if (fret === 0) return NUT_MARGIN / 2;
      return (fretXPositions[fret - 1] + fretXPositions[fret]) / 2;
    },
    [fretXPositions]
  );

  const visibleNotes = useMemo<VisibleNote[]>(() => {
    const notes: VisibleNote[] = [];
    for (let stringIndex = 0; stringIndex < STANDARD_TUNING.length; stringIndex += 1) {
      for (let fret = 0; fret <= clampedFrets; fret += 1) {
        const pitchClass = pitchClassForFret(stringIndex, fret);
        if (!isPitchInScale(rootIndex, scale, pitchClass)) continue;
        notes.push({
          stringIndex,
          fret,
          pitchClass,
          interval: intervalFromRoot(rootIndex, pitchClass),
          isRoot: pitchClass === rootIndex,
          x: fretCenterX(fret),
          y: stringY(stringIndex),
        });
      }
    }
    return notes;
  }, [clampedFrets, rootIndex, scale, fretCenterX, stringY]);

  const handleNoteInteraction = useCallback(
    (note: VisibleNote) => {
      unlockAudio();
      const frequency = frequencyForFret(note.stringIndex, note.fret);
      playFrequency(frequency);
    },
    [unlockAudio, playFrequency]
  );

  // Standard one-finger-per-fret technique assigns finger 1-4 by position
  // within whichever 4-fret "box" is currently in view -- a practice
  // convention, not a claim about one canonically correct fingering.
  const suggestedFinger = useCallback(
    (fret: number) => {
      if (fret === 0) return null;
      const boxStart = fretXPositions.length > 4 ? Math.max(1, Math.min(clampedFrets - 3, fret - ((fret - 1) % 4))) : 1;
      const finger = fret - boxStart + 1;
      return Math.min(4, Math.max(1, finger));
    },
    [clampedFrets, fretXPositions.length]
  );

  return (
    <div className={className}>
      <div style={{ perspective: '1400px' }}>
        <motion.div
          ref={tiltContainerRef}
          onMouseMove={handleBoardMouseMove}
          onMouseLeave={handleBoardMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="glass-panel overflow-x-auto overflow-y-hidden rounded-2xl p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] sm:p-6"
        >
        <svg
          role="img"
          aria-label={`Guitar fretboard showing the ${rootNote} ${scale.name} scale across ${clampedFrets} frets`}
          viewBox={`0 0 ${boardWidth} ${boardHeight}`}
          width={Math.max(boardWidth, 560)}
          height={boardHeight}
          className="block"
          style={{ minWidth: `${boardWidth}px` }}
        >
          <defs>
            <radialGradient id={`${gradientId}-root`} cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFD37A" />
              <stop offset="100%" stopColor="#FF8A00" />
            </radialGradient>
            <radialGradient id={`${gradientId}-tone`} cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#8FD6FF" />
              <stop offset="100%" stopColor="#2E8FD9" />
            </radialGradient>
          </defs>

          {/* Fretboard wood bed */}
          <rect
            x={0}
            y={TOP_MARGIN - 14}
            width={boardWidth}
            height={boardHeight - TOP_MARGIN - BOTTOM_MARGIN + 28}
            rx={10}
            className="fill-slateCard"
          />

          {/* Inlay markers */}
          {Array.from({ length: clampedFrets }, (_, i) => i + 1).map((fret) => {
            const cx = fretCenterX(fret);
            const cy = (TOP_MARGIN + boardHeight - BOTTOM_MARGIN) / 2;
            if (DOUBLE_DOT_FRETS.has(fret)) {
              return (
                <g key={`inlay-${fret}`}>
                  <circle cx={cx} cy={cy - 20} r={5} className="fill-slateLine" />
                  <circle cx={cx} cy={cy + 20} r={5} className="fill-slateLine" />
                </g>
              );
            }
            if (SINGLE_DOT_FRETS.has(fret)) {
              return <circle key={`inlay-${fret}`} cx={cx} cy={cy} r={5} className="fill-slateLine" />;
            }
            return null;
          })}

          {/* Nut */}
          <rect x={NUT_MARGIN - 6} y={TOP_MARGIN - 10} width={6} height={boardHeight - TOP_MARGIN - BOTTOM_MARGIN + 20} className="fill-amber-glow" />

          {/* Fret wires */}
          {fretXPositions.slice(1).map((x, i) => (
            <line
              key={`fret-${i + 1}`}
              x1={x}
              y1={TOP_MARGIN - 10}
              x2={x}
              y2={boardHeight - BOTTOM_MARGIN + 10}
              strokeWidth={1.5}
              className="stroke-slateLine"
            />
          ))}

          {/* Fret number labels */}
          {Array.from({ length: clampedFrets }, (_, i) => i + 1)
            .filter((fret) => SINGLE_DOT_FRETS.has(fret) || DOUBLE_DOT_FRETS.has(fret))
            .map((fret) => (
              <text
                key={`label-${fret}`}
                x={fretCenterX(fret)}
                y={boardHeight - 6}
                textAnchor="middle"
                className="fill-slate-400 text-[10px] font-mono"
              >
                {fret}
              </text>
            ))}

          {/* Strings */}
          {STANDARD_TUNING.map((tuning) => (
            <line
              key={`string-${tuning.stringIndex}`}
              x1={0}
              y1={stringY(tuning.stringIndex)}
              x2={boardWidth}
              y2={stringY(tuning.stringIndex)}
              strokeWidth={1 + tuning.stringIndex * 0.35}
              className="stroke-slate-300/70"
            />
          ))}

          {/* Scale-tone notes */}
          <AnimatePresence>
            {visibleNotes.map((note) => {
              const key = `${note.stringIndex}-${note.fret}`;
              const isHovered = hovered?.stringIndex === note.stringIndex && hovered?.fret === note.fret;
              return (
                <motion.g
                  key={key}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  onMouseEnter={() => setHovered(note)}
                  onMouseLeave={() => setHovered((current) => (current === note ? null : current))}
                  onFocus={() => setHovered(note)}
                  onBlur={() => setHovered((current) => (current === note ? null : current))}
                  onClick={() => handleNoteInteraction(note)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${indexToNoteName(note.pitchClass)}, ${INTERVAL_LABELS[note.interval]}, string ${6 - note.stringIndex}, fret ${note.fret}`}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Soft contact shadow on the wood, offset below the orb --
                      the cue that reads as "floating above the surface." */}
                  <ellipse
                    cx={note.x}
                    cy={note.y + (note.isRoot ? 7 : 5)}
                    rx={note.isRoot ? 9 : 6.5}
                    ry={note.isRoot ? 3 : 2.2}
                    fill="rgba(0,0,0,0.45)"
                    style={{ filter: 'blur(2px)' }}
                  />
                  <motion.circle
                    cx={note.x}
                    cy={note.y}
                    r={note.isRoot ? 12 : 9}
                    fill={note.isRoot ? `url(#${gradientId}-root)` : `url(#${gradientId}-tone)`}
                    stroke={isHovered ? '#FFFFFF' : 'transparent'}
                    strokeWidth={2}
                    animate={isHovered ? { scale: 1.25, y: -2 } : { scale: 1, y: 0 }}
                    style={{ filter: note.isRoot ? 'drop-shadow(0 0 10px rgba(255,138,0,0.9)) drop-shadow(0 0 20px rgba(255,138,0,0.5))' : 'drop-shadow(0 0 8px rgba(46,143,217,0.8)) drop-shadow(0 0 16px rgba(46,143,217,0.4))' }}
                  />
                  <text
                    x={note.x}
                    y={note.y + 3}
                    textAnchor="middle"
                    className="pointer-events-none select-none fill-slate-950 text-[9px] font-bold"
                  >
                    {INTERVAL_LABELS[note.interval]}
                  </text>
                </motion.g>
              );
            })}
          </AnimatePresence>
        </svg>
        </motion.div>
      </div>

      {/* Hover / focus detail panel */}
      <div className="mt-4 min-h-[76px] rounded-xl border border-slateLine bg-slateSurface/60 px-5 py-4">
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.div
              key={`${hovered.stringIndex}-${hovered.fret}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm"
            >
              <span className="font-display text-lg font-bold text-amber-glow">
                {indexToNoteName(hovered.pitchClass)}
              </span>
              <span className="text-slate-300">
                Interval: <span className="font-semibold text-white">{INTERVAL_LABELS[hovered.interval]}</span>
              </span>
              <span className="text-slate-300">
                String {6 - hovered.stringIndex} &middot; Fret {hovered.fret}
              </span>
              {suggestedFinger(hovered.fret) && (
                <span className="text-slate-300">
                  Suggested finger: <span className="font-semibold text-white">{suggestedFinger(hovered.fret)}</span>
                </span>
              )}
              <span className="text-xs text-slate-500">Click to hear it</span>
            </motion.div>
          ) : (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-slate-500"
            >
              Hover or focus a note to see its name, interval, and suggested fingering. Click to hear it.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
