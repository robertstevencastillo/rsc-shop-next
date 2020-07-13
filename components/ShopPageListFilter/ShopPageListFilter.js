import React, { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./ShopPageListFilter.module.css";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function ShopPageListFilter(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const router = useRouter();

  function handleCategoryChange(event) {
    appDispatch({ type: `${event.target.value.toUpperCase()}` });
    router.push(`/shop/[category]`, `/shop/${event.target.value}`, { shallow: true });
  }

  return (
    <div className={styles.shopPageListFilterContainer}>
      <span>
        <strong>Categories: </strong>
      </span>
      <select onChange={handleCategoryChange} value={appState.activeShopPageList}>
        {appState.clothingCategories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category[0].toUpperCase() + category.slice(1, category.length)}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ShopPageListFilter;

//
