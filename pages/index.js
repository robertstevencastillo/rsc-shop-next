import Head from "next/head";
import Header from "../components/Header";
import ShopNowList from "../components/shopNow/shopNowList";

export default function Home() {
  return (
    <>
      <Head>
        <title>RSC Shop - Home</title>
      </Head>
      <ShopNowList />
    </>
  );
}
