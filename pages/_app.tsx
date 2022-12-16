import type { AppProps } from "next/app";
import Header from "@layout/header";
import Footer from "@layout/footer";
import "styles/globals.css";
import "styles/layout.css";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Test app for next js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
