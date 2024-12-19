import { Inter } from 'next/font/google';

const heading = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});

// we export these fonts into the root layout
export { heading };
