import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AltTab',
  description: 'Blog sobre humor geração Z e tecnologia',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-zinc-900 text-zinc-200">
        <header className="bg-zinc-900 text-zinc-200">
          <div className="p-5 flex justify-between items-center">
            <Link href={`/`}>
              <div className="text-3xl font-bold flex justify-center items-center space-x-1">
                <span style={{ color: "#ff9700" }}>Alt</span>
                <span style={{ color: "#4c65aa" }}>Tab</span>
              </div>
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
