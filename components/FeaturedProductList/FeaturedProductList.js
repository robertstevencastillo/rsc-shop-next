import React from "react";
import styles from "./FeaturedProductList.module.css";
import { SHOP_DATA } from "../../data/shop-data";
import FeaturedProduct from "./FeaturedProduct";

function FeaturedProductList(props) {
  const featuredProducts = [
    {
      ...SHOP_DATA.hats.items[3],
    },
    {
      ...SHOP_DATA.shoes.items[2],
    },
    {
      ...SHOP_DATA.jackets.items[2],
    },
    {
      ...SHOP_DATA.mens.items[1],
    },
    {
      ...SHOP_DATA.womens.items[1],
    },
  ];

  console.log(featuredProducts);
  return (
    <div className={styles.featuredProductListContainer}>
      <h3>
        <strong>
          <i> Our Featured Items</i>
        </strong>
      </h3>
      <div className={styles.featuredProductList}>
        {featuredProducts.map(featuredProduct => {
          return <FeaturedProduct key={featuredProduct.id} id={featuredProduct.id} category={featuredProduct.category} imageUrl={featuredProduct.imageUrl} name={featuredProduct.name} price={featuredProduct.price} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProductList;
