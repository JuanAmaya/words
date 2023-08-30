"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WORD_',
  description: 'A game where you need to guess the word based on the letters offered to the user, the guessed words get added to a collection where the user can see the meaning of those words.',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  let pageBg = "bg-lightGren";
  switch (pathname) {
    case "/":
      pageBg = "bg-lightGren";
      break;

    case "/dictionary":
      pageBg = "bg-lightYellow";
      break;

    case "/game":
      pageBg = "bg-lightPurple";
      break;
  }
  return (
    <html lang="en">
      <body className={`${inter.className} ${pageBg} transition-colors`}>{children}</body>
    </html>
  );
}
