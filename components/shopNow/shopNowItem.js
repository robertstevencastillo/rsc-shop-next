import React from "react";
import styles from "./shopNowItem.module.css";

function ShopNowItem(props) {
  return (
    <div className={styles.shopNowItem}>
      <div
        className={styles.shopNowItemBackgroundImage}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className={styles.shopNowItemButtonContainer}>
        <button className={styles.shopNowItemButton}>Shop {props.title}</button>
      </div>
    </div>
  );
}

export default ShopNowItem;
