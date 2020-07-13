import Head from "next/head";
import React from "react";
import ShopNowList from "../components/shopNow/shopNowList";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>RSC Shop - Home</title>
      </Head>
      <ShopNowList />
    </>
  );
}
