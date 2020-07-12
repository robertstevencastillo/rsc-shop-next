import React from "react";
import styles from "./ShopPageListItem.module.css";
import { useRouter } from "next/router";

function ShopPageListItem(props) {
  const router = useRouter();

  function handleItemClick(event) {
    event.preventDefault();
    router.push(`${router.asPath}/${props.id}`);
  }

  return (
    <div className={styles.shopPageListItemContainer} onClick={handleItemClick}>
      <div className={styles.shopPageListItemImgContainer}>
        <img className={styles.shopPageListItemImg} src={props.image} />
      </div>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  );
}

export default ShopPageListItem;
