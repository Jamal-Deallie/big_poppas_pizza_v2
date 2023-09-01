import { ReactNode, Suspense } from 'react';
import MainLayout from '@/components/Layout';
import '@/styles/base/globals.scss';
import localFont from 'next/font/local';
import RouterMounting from '@/components/RouterMounting';
import { ensureStartsWith } from '@/helpers/ensureStartsWith';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, '@')
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, 'https://')
  : undefined;

const neue_haas_unica = localFont({
  src: [
    {
      path: '../fonts/Neue Haas Unica W1G Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Neue Haas Unica W1G Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Neue Haas Unica W1G Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--body-font',
});

const new_kansas = localFont({
  src: [
    {
      path: '../fonts/New Kansas Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/New Kansas Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--heading-font',
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
      },
    }),
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${new_kansas.variable} ${neue_haas_unica.variable}`}>
      <body>
        <MainLayout>
          <Suspense>{children}</Suspense>
        </MainLayout>
      </body>
    </html>
  );
}