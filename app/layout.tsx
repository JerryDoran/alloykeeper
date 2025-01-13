import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { roboto } from '@/font';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='dark'>
      <body className={`${roboto.className} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
