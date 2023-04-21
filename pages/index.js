import Head from "next/head";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ReadMeApp from "./components/ReadMeApp";

const assetPrefix = process.env.assetURL || "";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReadME Generator</title>
        <link rel="apple-touch-icon" sizes="180x180" href={`${assetPrefix}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${assetPrefix}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${assetPrefix}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href={`${assetPrefix}/favicon/site.webmanifest`}></link>
      </Head>
      <Heading />
      <ReadMeApp />
      <Footer />
    </>
  );
}
