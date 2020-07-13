import React, { useContext } from "react";
import styles from "./ShopPageListItem.module.css";
import { useRouter } from "next/router";
import StateContext from "../../../context/StateContext";

import Link from "next/link";

function ShopPageListItem(props) {
  //const router = useRouter();
  const appState = useContext(StateContext);

  return (
    <Link href={`/shop/[category]/[categoryItem]`} as={`/shop/${appState.activeShopPageList}/${props.id}`}>
      <div className={styles.shopPageListItemContainer}>
        <div className={styles.shopPageListItemImgContainer}>
          <img className={styles.shopPageListItemImg} src={props.image} />
        </div>
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  );
}

export default ShopPageListItem;

//    <Link href={`${router.pathname}/[item]`} as={`${router.asPath}/${props.id}`}>
