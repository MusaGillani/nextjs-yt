import { ReactElement } from "react";
import Head from "next/head";
import Footer from "../components/layout/footer";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title> About This app</title>
        <meta name="description" content="Testing application for next js " />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
};

About.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export default About;
