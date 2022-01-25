import "../styles/globals.css";
import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { configuration } from "../util/configuration";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <>
      <NextSeo
        title={configuration.title}
        description={configuration.description}
      />
      <div
        className={`bg-cover h-screen overflow-hidden px-7 py-7`}
        style={{
          backgroundImage: "url('/static/images/background.jpg')",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
