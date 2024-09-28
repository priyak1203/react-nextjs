import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter, Inconsolata, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const inconsolata = Inconsolata({ subsets: ['latin'] });

const roboto = Roboto({ subsets: ['latin'], weight: ['500'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-5xl mx-auto py-10">
          {children}
          <div className={`py-5 ${inconsolata.className}`}>
            <h3>Inconsolata Font</h3>
            <p>This section contains inconsolata font</p>
          </div>
          <div className={roboto.className}>
            <h3>Roboto Font</h3>
            <p>This section contains roboto font</p>
          </div>
        </main>
      </body>
    </html>
  );
}
