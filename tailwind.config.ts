import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@kit/tailwind-config';

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './app/**/*.tsx',
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
      fontFamily: {
        cal: ['var(--font-cal)', ...fontFamily.sans],
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-heading)'],
      },
    },
  },
} satisfies Config;
