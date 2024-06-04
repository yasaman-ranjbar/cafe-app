import "@/styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: React.JSX.IntrinsicElements["div"];
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
