import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fredoka } from "@next/font/google";
import { cn } from "@/lib/utils";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fredoka",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(fredoka.className)}>
      <Layout>
        <Head>
          <title>Tanya Bernice Santos</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
