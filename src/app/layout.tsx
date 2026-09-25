import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chainsaw Lens — Interaction Study',
  description: 'An unofficial interactive portfolio concept.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
