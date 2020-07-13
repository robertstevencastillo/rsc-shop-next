import React from "react";
import ShopItem from "../../../../components/ShopItem/ShopItem";
import { SHOP_DATA } from "../../../../data/shop-data";

export async function getStaticPaths() {
  const tempPaths = [
    Object.values(SHOP_DATA).map(obj => {
      return obj.items.map(item => {
        return {
          params: {
            category: `[${obj.routeName}]`,
            categoryItem: `[${item.id}]`,
          },
        };
      });
    }),
  ];

  const paths = tempPaths.reduce((flat, nestedArray) => {
    return flat.concat(...nestedArray);
  }, []);

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

function ShopItemIndex(props) {
  return (
    <>
      <ShopItem />
    </>
  );
}

export default ShopItemIndex;
