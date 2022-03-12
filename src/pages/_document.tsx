import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';

import Config from '@/constants/Document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={Config.language}>
        <Head>
          {/* Configuring the font */}
          {Config.font.google && (
            <>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
              />
              <link href={Config.font.url} rel="stylesheet" />
            </>
          )}

          <meta name="description" content={Config.description} />

          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/Manifest/icon-192x192.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#000000" />

          <link rel="manifest" href="/Manifest/manifest.json" />

          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* Chakra UI script */}
          <ColorModeScript initialColorMode={Config.chakra.initialColorMode} />

          {/* Next config */}
          <Main />
          <NextScript />

          {/* Configuring portals */}
          {Config.portals.map((data) => {
            <div id={data.id} className={data.className} />;
          })}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
