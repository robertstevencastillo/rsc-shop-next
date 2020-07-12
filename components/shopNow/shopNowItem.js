import React, { useState, useContext } from "react";
import styles from "./shopNowItem.module.css";
import { useRouter } from "next/router";
import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

function ShopNowItem(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const router = useRouter();

  function handleShopNowItemClick(event) {
    event.preventDefault();
    appDispatch({ type: `${props.title.toUpperCase()}` });
    router.push(`/shop/${props.title}`);
    /*Problem we are having - If you comment out the router.push(), what you'll notice is the action is dispatched correctly. For example, If I hit the "hats" shop now list item in the home page, our state property, activeShopPageList, will be set to hats, and 
    our other state property, activeShopPageItems, will be set to an array of hat items. 
    
    When you uncomment that router push line, and then click on an item that is on the shop now list, in the home page, activeShopPageList and activeShopPageItems don't seem to change their values. The keep their default value, 'all' and an array containing all the items in our product data object. Not sure why? It looks like our app reboots itself, when we push a new route path
    */

    /*Possible fix - create a filter component, and pass the activeShopPageItems value to that filter */
  }

  return (
    <div className={styles.shopNowItem}>
      <div
        className={styles.shopNowItemBackgroundImage}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className={styles.shopNowItemButtonContainer}>
        <button onClick={handleShopNowItemClick} className={styles.shopNowItemButton}>
          <span>{props.upperCaseTitle}</span>
        </button>
      </div>
    </div>
  );
}

export default ShopNowItem;

/* 
When the button is clicked,
1 - 
*/
