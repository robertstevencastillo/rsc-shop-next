import React from "react";
import ShopItem from "../../../../components/ShopItem/ShopItem";
import { SHOP_DATA } from "../../../../data/shop-data";

export async function getStaticPaths() {
  const tempPaths = [
    Object.values(SHOP_DATA).map(obj => {
      return obj.items.map(item => {
        return {
          params: {
            //category: `/shop/${obj.routeName}`,
            //categoryItem: `/shop/${obj.routeName}/${item.id}`,
            category: `${obj.routeName}`,
            categoryItem: `${item.id}`,
          },
        };
      });
    }),
  ];
  //returns an array that contains 6 sub arrays. Each subarray contains objects pertaining to a particular clothing category

  const paths = tempPaths.reduce((flat, nestedArray) => {
    return flat.concat(...nestedArray);
  }, []);
  // return an array consisting of objects, where each object contains information about a clothing category, and the clothing item. This allows our app to see all the possible paths under the 'shop' route

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      context,
      SHOP_DATA,
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
