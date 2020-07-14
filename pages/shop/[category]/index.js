import React from "react";
import ShopPageList from "../../../components/ShopPageList/ShopPageList";
import { CLOTHING_CATEGORIES } from "../../../data/shop-data";

export async function getStaticPaths() {
  const paths = CLOTHING_CATEGORIES.map(currCategory => {
    return {
      params: {
        category: `/shop/${currCategory}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      context,
    }, // will be passed to the page component as props
  };
}

function ShopIndex(props) {
  return (
    <>
      <ShopPageList />
    </>
  );
}

export default ShopIndex;
