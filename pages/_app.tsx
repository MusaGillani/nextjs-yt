import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/Navbar.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
