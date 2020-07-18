import Head from "next/head";
import React from "react";
import ShopNowList from "../components/shopNow/shopNowList";
import HomePageIntroSection from "../components/HomePageIntroSection/HomePageIntroSection";
import FeaturedProductList from "../components/FeaturedProductList/FeaturedProductList";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>RSC Shop - Home</title>
      </Head>
      <HomePageIntroSection />
      <ShopNowList />
      <FeaturedProductList />
    </>
  );
}
