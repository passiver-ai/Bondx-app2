import { cookies } from 'next/headers';

import { heading } from '@/lib/fonts';
import { createI18nServerInstance } from '@/lib/i18n/i18n.server';
import RootProvider from '@/providers/root';
import '@/styles/globals.css';

import { Toaster } from '@kit/ui/sonner';
import { cn } from '@kit/ui/utils';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = await createI18nServerInstance();
  const theme = await getTheme();
  const className = getClassName(theme);

  return (
    <html lang={language} className={className}>
      <body>
        <RootProvider theme={theme} lang={language}>
          {children}
        </RootProvider>

        <Toaster richColors={true} theme={theme} position="top-center" />
      </body>
    </html>
  );
}

function getClassName(theme?: string) {
  const dark = theme === 'dark';
  const light = !dark;

  const font = [heading.variable].reduce<string[]>((acc, curr) => {
    if (acc.includes(curr)) return acc;

    return [...acc, curr];
  }, []);

  return cn('min-h-screen bg-background antialiased', ...font, {
    dark,
    light,
  });
}

async function getTheme() {
  const cookiesStore = await cookies();
  return cookiesStore.get('theme')?.value as 'light' | 'dark' | 'system';
}
