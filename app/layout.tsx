import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788549603126',
  description: 'Ember & Oak is a moody, premium specialty coffee roastery website designed to sell freshly roasted beans, promote subscriptions, book tasting events, and drive visits to its Pearl District café. The experience combines editorial storytelling, transparent sourcing education, tactile product presentation, and warm neighborhood hospitality.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#1a1410', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
