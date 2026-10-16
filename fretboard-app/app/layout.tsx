import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fretboard Explorer | Mountain Culture Guitar Lessons',
  description: 'Interactive fretboard visualizer with scale overlays -- a free practice tool from Mountain Culture Guitar Lessons.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slateDeep text-white antialiased">{children}</body>
    </html>
  );
}
