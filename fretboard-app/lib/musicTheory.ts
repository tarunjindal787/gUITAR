/**
 * Master music-theory data layer.
 *
 * Pitch classes are represented as integers 0-11 (0 = C), which is the only
 * representation every other structure here is built on top of. Note *names*
 * (sharps) are a display concern layered on top via NOTE_NAMES.
 */

export const NOTE_NAMES = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
] as const;

export type NoteName = (typeof NOTE_NAMES)[number];

export function noteNameToIndex(note: NoteName): number {
  return NOTE_NAMES.indexOf(note);
}

export function indexToNoteName(index: number): NoteName {
  const normalized = ((index % 12) + 12) % 12;
  return NOTE_NAMES[normalized];
}

/** Interval labels, indexed 0-11 from the root. Flat-based naming is used
 *  uniformly (b2/b3/b6/b7) regardless of major/minor context -- a deliberate
 *  simplification documented in the Edge Cases section rather than a
 *  half-built enharmonic speller. */
export const INTERVAL_LABELS = [
  'R', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7',
] as const;

export type IntervalLabel = (typeof INTERVAL_LABELS)[number];

// ---------------------------------------------------------------------------
// Tuning
// ---------------------------------------------------------------------------

export interface StringTuning {
  /** 0 = lowest-pitched string (thick E), 5 = highest-pitched string (thin E). */
  stringIndex: number;
  openNote: NoteName;
  openOctave: number;
}

export const STANDARD_TUNING: readonly StringTuning[] = [
  { stringIndex: 0, openNote: 'E', openOctave: 2 },
  { stringIndex: 1, openNote: 'A', openOctave: 2 },
  { stringIndex: 2, openNote: 'D', openOctave: 3 },
  { stringIndex: 3, openNote: 'G', openOctave: 3 },
  { stringIndex: 4, openNote: 'B', openOctave: 3 },
  { stringIndex: 5, openNote: 'E', openOctave: 4 },
];

/** A3 = 220Hz reference, equal temperament: freq = 220 * 2^((n - A3_SEMITONE)/12) */
const A4_FREQUENCY = 440;

/** Absolute semitone number relative to C0, used for frequency calculation. */
function absoluteSemitone(note: NoteName, octave: number): number {
  return octave * 12 + noteNameToIndex(note);
}

const A4_ABSOLUTE_SEMITONE = absoluteSemitone('A', 4);

export function frequencyForFret(stringIndex: number, fret: number): number {
  const tuning = STANDARD_TUNING[stringIndex];
  if (!tuning) throw new Error(`Invalid stringIndex: ${stringIndex}`);
  const semitone = absoluteSemitone(tuning.openNote, tuning.openOctave) + fret;
  const semitonesFromA4 = semitone - A4_ABSOLUTE_SEMITONE;
  return A4_FREQUENCY * Math.pow(2, semitonesFromA4 / 12);
}

export function pitchClassForFret(stringIndex: number, fret: number): number {
  const tuning = STANDARD_TUNING[stringIndex];
  if (!tuning) throw new Error(`Invalid stringIndex: ${stringIndex}`);
  return (noteNameToIndex(tuning.openNote) + fret) % 12;
}

// ---------------------------------------------------------------------------
// Scales
// ---------------------------------------------------------------------------

export interface ScaleDefinition {
  id: string;
  name: string;
  /** Semitone offsets from the root, ascending, always starting at 0. */
  intervals: readonly number[];
}

export const SCALES: readonly ScaleDefinition[] = [
  { id: 'major', name: 'Major (Ionian)', intervals: [0, 2, 4, 5, 7, 9, 11] },
  { id: 'natural-minor', name: 'Natural Minor (Aeolian)', intervals: [0, 2, 3, 5, 7, 8, 10] },
  { id: 'major-pentatonic', name: 'Major Pentatonic', intervals: [0, 2, 4, 7, 9] },
  { id: 'minor-pentatonic', name: 'Minor Pentatonic', intervals: [0, 3, 5, 7, 10] },
  { id: 'blues', name: 'Blues', intervals: [0, 3, 5, 6, 7, 10] },
  { id: 'dorian', name: 'Dorian', intervals: [0, 2, 3, 5, 7, 9, 10] },
  { id: 'phrygian', name: 'Phrygian', intervals: [0, 1, 3, 5, 7, 8, 10] },
  { id: 'lydian', name: 'Lydian', intervals: [0, 2, 4, 6, 7, 9, 11] },
  { id: 'mixolydian', name: 'Mixolydian', intervals: [0, 2, 4, 5, 7, 9, 10] },
  { id: 'locrian', name: 'Locrian', intervals: [0, 1, 3, 5, 6, 8, 10] },
  { id: 'harmonic-minor', name: 'Harmonic Minor', intervals: [0, 2, 3, 5, 7, 8, 11] },
  { id: 'melodic-minor', name: 'Melodic Minor', intervals: [0, 2, 3, 5, 7, 9, 11] },
];

export function getScaleById(id: string): ScaleDefinition {
  const scale = SCALES.find((s) => s.id === id);
  if (!scale) throw new Error(`Unknown scale id: ${id}`);
  return scale;
}

/** Semitone distance of a pitch class from a given root, 0-11. */
export function intervalFromRoot(rootIndex: number, pitchClass: number): number {
  return ((pitchClass - rootIndex) % 12 + 12) % 12;
}

export function isPitchInScale(rootIndex: number, scale: ScaleDefinition, pitchClass: number): boolean {
  const interval = intervalFromRoot(rootIndex, pitchClass);
  return scale.intervals.includes(interval);
}

// ---------------------------------------------------------------------------
// Chords (data-modeled for the shared architecture; not rendered by the
// scale-overlay fretboard built in this pass -- see Component Blueprint).
// ---------------------------------------------------------------------------

export type FingerNumber = 0 | 1 | 2 | 3 | 4;

export interface ChordFretPosition {
  stringIndex: number;
  /** 0 = open string. */
  fret: number;
  /** 0 = open string / no finger used. */
  finger: FingerNumber;
}

export interface ChordBarre {
  fret: number;
  fromString: number;
  toString: number;
  finger: FingerNumber;
}

export interface ChordShape {
  id: string;
  name: string;
  rootNote: NoteName;
  /** Strings not listed here are muted ("x"). */
  positions: readonly ChordFretPosition[];
  barre?: ChordBarre;
}

export const CHORD_SHAPES: readonly ChordShape[] = [
  {
    id: 'e-major-open',
    name: 'E Major (Open)',
    rootNote: 'E',
    positions: [
      { stringIndex: 0, fret: 0, finger: 0 },
      { stringIndex: 1, fret: 2, finger: 2 },
      { stringIndex: 2, fret: 2, finger: 3 },
      { stringIndex: 3, fret: 1, finger: 1 },
      { stringIndex: 4, fret: 0, finger: 0 },
      { stringIndex: 5, fret: 0, finger: 0 },
    ],
  },
  {
    id: 'a-minor-open',
    name: 'A Minor (Open)',
    rootNote: 'A',
    positions: [
      { stringIndex: 1, fret: 0, finger: 0 },
      { stringIndex: 2, fret: 2, finger: 2 },
      { stringIndex: 3, fret: 2, finger: 3 },
      { stringIndex: 4, fret: 1, finger: 1 },
      { stringIndex: 5, fret: 0, finger: 0 },
    ],
  },
  {
    id: 'g-major-open',
    name: 'G Major (Open)',
    rootNote: 'G',
    positions: [
      { stringIndex: 0, fret: 3, finger: 3 },
      { stringIndex: 1, fret: 2, finger: 2 },
      { stringIndex: 2, fret: 0, finger: 0 },
      { stringIndex: 3, fret: 0, finger: 0 },
      { stringIndex: 4, fret: 0, finger: 0 },
      { stringIndex: 5, fret: 3, finger: 4 },
    ],
  },
  {
    id: 'c-major-open',
    name: 'C Major (Open)',
    rootNote: 'C',
    positions: [
      { stringIndex: 1, fret: 3, finger: 3 },
      { stringIndex: 2, fret: 2, finger: 2 },
      { stringIndex: 3, fret: 0, finger: 0 },
      { stringIndex: 4, fret: 1, finger: 1 },
      { stringIndex: 5, fret: 0, finger: 0 },
    ],
  },
  {
    id: 'd-major-open',
    name: 'D Major (Open)',
    rootNote: 'D',
    positions: [
      { stringIndex: 2, fret: 0, finger: 0 },
      { stringIndex: 3, fret: 2, finger: 1 },
      { stringIndex: 4, fret: 3, finger: 3 },
      { stringIndex: 5, fret: 2, finger: 2 },
    ],
  },
];
