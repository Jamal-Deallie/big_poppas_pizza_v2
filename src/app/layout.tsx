import { ReactNode, Suspense } from 'react';
import Layout from '@/components/Layout';
import './base/globals.scss';
import localFont from 'next/font/local';
import RouterMounting from '@/components/RouterMounting';

const { SITE_NAME, SITE_DESCRIPTION } = process.env;

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
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description: {
    default: SITE_DESCRIPTION,
  },
  robots: {
    follow: true,
    index: true,
  },
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
      {/* <head>
        <link rel='stylesheet' href='https://use.typekit.net/jes2hnw.css' />
      </head> */}

      <body suppressHydrationWarning={true}>
        <RouterMounting>
          <Layout>
            <Suspense>{children}</Suspense>
          </Layout>
        </RouterMounting>
      </body>
    </html>
  );
}
