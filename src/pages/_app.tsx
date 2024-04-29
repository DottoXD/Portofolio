import FooterComponent from "@/components/Footer";
import NewsComponent from "@/components/News";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NewsComponent/>
      <Component {...pageProps} />
      <FooterComponent/>
    </div>
  );
}
