'use client';

import { useRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// motion.button's drag/animation event props have different signatures than
// the native DOM ones; omitting the clashing keys is the standard fix for
// spreading native ButtonHTMLAttributes onto a Framer Motion component.
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
>;

interface MagneticButtonProps extends NativeButtonProps {
  children: ReactNode;
  glow?: 'amber' | 'teal' | 'violet';
  /** How strongly the button chases the cursor, in px of max travel. */
  strength?: number;
}

const GLOW_CLASS: Record<NonNullable<MagneticButtonProps['glow']>, string> = {
  amber: 'bg-amber-glow/90 text-slate-950 shadow-amber-glow',
  teal: 'bg-teal-glow/90 text-slate-950 shadow-teal-glow',
  violet: 'bg-violet-glow/90 text-slate-950 shadow-violet-glow',
};

/**
 * A button that subtly chases the cursor within its own bounds (the
 * "magnet" micro-interaction) and springs back to center on leave.
 * Motion values + a spring (rather than raw state + CSS transition) keep
 * the chase buttery at 60fps without re-rendering React on every
 * mousemove.
 */
export default function MagneticButton({
  children,
  glow = 'amber',
  strength = 14,
  className = '',
  ...buttonProps
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relativeX = event.clientX - (rect.left + rect.width / 2);
    const relativeY = event.clientY - (rect.top + rect.height / 2);
    x.set((relativeX / (rect.width / 2)) * strength);
    y.set((relativeY / (rect.height / 2)) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-widest transition-shadow duration-300 ${GLOW_CLASS[glow]} ${className}`}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
