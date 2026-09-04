import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ember & Oak | Specialty Coffee Roastery',
  description: 'Specialty coffee roasted with intention in Portland, Oregon. Shop freshly roasted beans, subscribe for regular deliveries, or visit our Pearl District café.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0a0a0a', margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
