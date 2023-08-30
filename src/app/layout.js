import BackgroundColor from '@/components/BackgroundColor';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WORD_',
  description: 'A game where you need to guess the word based on the letters offered to the user, the guessed words get added to a collection where the user can see the meaning of those words.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BackgroundColor classes={inter.className}>
        {children}
      </BackgroundColor>
    </html>
  );
}
