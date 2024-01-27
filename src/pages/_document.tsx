import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="">
      <Head>
        <link rel="icon" type="image/png" href="./images/ninja-logo.png" />
        <meta name="title" content="Sandro - Web3 Ninja" />
        {/* facebook  / open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alessandroaw.dev"></meta>
        <meta property="og:title" content="Sandro - Web3 Ninja" />
        <meta property="og:description" content="" />
        {/* <meta
          property="og:image"
          content="https://anahoward.me/images/preview.png"
        ></meta>

        {/* twitter */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alessandroaw.dev" />
        <meta
          property="twitter:title"
          content="Ana Howard - Colourful Haired Human"
        />
        <meta
          property="twitter:description"
          content="https://alessandroaw.dev"
        />
        <meta property="twitter:image" content="./images/preview.png"></meta> */}
      </Head>
      <body className="bg-[#f7f2f2] dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
