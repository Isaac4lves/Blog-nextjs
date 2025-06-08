import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AltTab',
  description: 'Blog sobre tecnologia, tutoriais e muito mais!.',
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

        <footer className="w-full mt-16 border-t border-zinc-800 py-6 px-4 text-center text-lg text-zinc-300">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm">
              &copy; 2025 AltTab — Feito por <span className="text-white">Isaac Alves Andrade</span>
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Isaac4lves"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/isaacalvesandrade"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
