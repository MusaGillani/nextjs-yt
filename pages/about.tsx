import { ReactElement } from "react";
import Footer from "../components/footer";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return <h1 className="content">About</h1>;
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
