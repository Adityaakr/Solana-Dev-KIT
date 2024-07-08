import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './component/Navbar';
import { Wallet } from './component/Wallet';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solana KIT',
  description: 'Build you solana Dapp NOW',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Wallet>
          <NavBar />
          {children}
        </Wallet>
      </body>
    </html>
  );
}
