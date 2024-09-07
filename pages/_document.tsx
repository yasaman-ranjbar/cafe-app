import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html dir="ltr" lang="en">
      <Head>
        <meta
          name="description"
          content="coffee application to book a table and reserve your coffee"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
