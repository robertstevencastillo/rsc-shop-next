import React from "react";
import ShopNowItem from "./shopNowItem.js";
import shopNowData from "./shopNowData.js";
import styles from "./shopNowList.module.css";
import Link from "next/link";

export default function ShopNowList() {
  return (
    <div className={styles.shopNowSection}>
      <h3>
        <i>Check Out Our Products</i>
      </h3>
      <div className={styles.shopNowList}>
        {shopNowData.map(item => {
          return <ShopNowItem key={item.id} title={item.upperCaseTitle} imageUrl={item.imageUrl} linkUrl={item.linkUrl} />;
        })}
      </div>
      <div className={styles.shopNowViewAllButtonContainer}>
        <Link href="/shop/all">
          <button className={styles.shopNowViewAllButton}>View All</button>
        </Link>
      </div>
    </div>
  );
}
