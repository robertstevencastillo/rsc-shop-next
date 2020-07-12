import React from "react";
import ShopNowItem from "./shopNowItem.js";
import shopNowData from "./shopNowData.js";
import styles from "./shopNowList.module.css";
import Link from "next/link";

function ShopNowList() {
  return (
    <div className={styles.shopNowSection}>
      <h3>
        <strong>
          <i>Check Out Our Products</i>
        </strong>
      </h3>
      <div className={styles.shopNowList}>
        {shopNowData.map(item => {
          return <ShopNowItem key={item.id} title={item.title} imageUrl={item.imageUrl} linkUrl={item.linkUrl} upperCaseTitle={item.upperCaseTitle} />;
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

export default ShopNowList;
