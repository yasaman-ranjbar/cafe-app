import PageLayout from "@/layout/PageLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

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
  const getLayout =
    Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
  // return (
  //   <div className="bg-primary-light min-h-screen relative overflow-x-hidden">
  //     <PageLayout>
  //       <Component {...pageProps} />
  //     </PageLayout>
  //   </div>
  // );
}
