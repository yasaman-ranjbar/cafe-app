import Navbar from "@/components/modules/Navbar/Navbar";
import "@/styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: React.JSX.IntrinsicElements["div"];
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-primary-light min-h-screen relative">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
