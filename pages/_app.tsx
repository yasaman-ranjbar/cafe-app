import "@/styles/globals.css";
import { NextPage } from "next";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: React.JSX.IntrinsicElements["div"];
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <Head>
        <meta name="author" content="coffee application" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
