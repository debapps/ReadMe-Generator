import Head from "next/head";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ReadMeApp from "./components/ReadMeApp";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReadME Generator</title>

        <link rel="apple-touch-icon" sizes="180x180" href={`${assetPrefix}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${assetPrefix}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${assetPrefix}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href={`${assetPrefix}/favicon/site.webmanifest`}></link>

         <meta
          name="description"
          content="This is Readme file generator app. This app display the readme file text written in markdown format, converts it to HTML format, copy the text into clipboad."
        />

      </Head>
      <Heading />
      <ReadMeApp />
      <Footer />
    </>
  );
}
