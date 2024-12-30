'use client';

import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;
