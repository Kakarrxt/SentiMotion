import { Inter, Albert_Sans } from 'next/font/google';
import Providers from './providers/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SentiMotion',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
    }) {
  return (
    <html lang="en">
          <body suppressHydrationWarning={true} className={inter.className}>
              <Providers>
                  {children}
              </Providers>
        </body>
    </html>
  )
}
