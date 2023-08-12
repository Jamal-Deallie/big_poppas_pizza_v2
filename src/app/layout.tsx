import { ReactNode, Suspense } from 'react';
import Layout from '@/components/Layout';
import Lenis from '@/components/Lenis';
import '@/styles/base/globals.scss';
import RouterMounting from '@/components/RouterMounting';

const { SITE_NAME, SITE_DESCRIPTION } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description : {
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
    <html lang='en'>
        <head>
        <link rel='stylesheet' href='https://use.typekit.net/jes2hnw.css' />
      </head>
      <Lenis>
        <body suppressHydrationWarning={true}>
          <RouterMounting>
            <Layout>
              <Suspense>{children}</Suspense>
            </Layout>
          </RouterMounting>
        </body>
      </Lenis>
    </html>
  );
}
