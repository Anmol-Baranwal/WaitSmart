import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}
