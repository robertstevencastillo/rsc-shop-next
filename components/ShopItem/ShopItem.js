import React, { useContext } from "react";
import { useRouter } from "next/router";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import styles from "./ShopItem.module.css";

function ShopItem(props) {
  const router = useRouter();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const item = appState.activeShopPageItems.filter(item => item.id.toString() === router.query.categoryItem).reduce(({}, item) => item);

  return (
    <div className={styles.shopItemContainer}>
      <div className={styles.shopItemImgContainer}>
        <img src={item.imageUrl} />
      </div>
      <div className={styles.shopItemDetailsContainer}>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
