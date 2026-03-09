import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'GlucoBit | See your glucose instantly, anywhere, at a glance.',
  description:
    'GlucoBit is a portable, battery-powered glucose companion that displays Dexcom CGM data in real time with clear visuals and strong audio/LED alerts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
