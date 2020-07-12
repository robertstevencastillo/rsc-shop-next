import React, { useContext, useEffect } from "react";
import styles from "./ShopPageListFilter.module.css";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function ShopPageListFilter(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    appDispatch({ type: `${appState.activeShopPageList.toUpperCase()}` });
  }, []);

  function handleCategoryChange(event) {
    appDispatch({ type: `${event.target.value.toUpperCase()}` });
  }

  return (
    <div className={styles.shopPageListFilterContainer}>
      <span>
        <strong>Categories: </strong>
      </span>
      <select onChange={handleCategoryChange} value={appDispatch.activeShopPageList}>
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
