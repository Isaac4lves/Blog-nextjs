import "./globals.css";
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
            <div className="text-center text-3xl font-bold">Alt Tab</div>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
