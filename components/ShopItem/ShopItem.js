import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import styles from "./ShopItem.module.css";
import GoToPreviousPage from "../GoToPreviousPage/GoToPreviousPage";
import Head from "next/head";

function ShopItem(props) {
  const router = useRouter();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const item = appState.activeShopPageItems.filter(item => item.id.toString() === router.query.categoryItem).reduce(({}, item) => item);

  function handleAddToCartClick(event) {
    event.preventDefault();
    appDispatch({ type: "ADD_TO_CART", value: item });
  }

  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <link rel="preconnect" href={`https://app.snipcart.com`} />
        <link rel="preconnect" href={`https://cdn.snipcart.com`} />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
      </Head>

      <div className={styles.shopItemPageContainer}>
        <GoToPreviousPage />
        <div className={styles.shopItemContainer}>
          <div className={styles.shopItemImgContainer}>
            <img src={item.imageUrl} />
          </div>
          <div className={styles.shopItemDetailsContainer}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button className="snipcart-add-item" data-item-id={item.id} data-item-name={item.name} data-item-price={item.price} data-item-url={`${router.asPath}`} data-item-image={item.imageUrl}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div id="snipcart" data-api-key="ZDZhYjUzZjUtOWI3Mi00ZDQ2LTg5OGEtZDI0ZjU5NGYzNjc5NjM3Mjc4NDYxODY3MjMxODY5" hidden></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
    </>
  );
}

export default ShopItem;

//<button onClick={handleAddToCartClick} className="snipcart-add-item" data-item-id={item.id} data-item-name={item.name} data-item-price={item.price} data-item-url={router.asPath} data-item-image={item.imageUrl}>
