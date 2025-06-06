import "./globals.css";
import Link from 'next/link';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'AltTab',
  description: 'Blog sobre humor geração Z e tecnologia',
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="bg-white shadow">
          <div className="p-5 justify-between">
            <Link href={`/`}> <div className="text-center text-3xl font-bold">Alt Tab</div> </Link>
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
