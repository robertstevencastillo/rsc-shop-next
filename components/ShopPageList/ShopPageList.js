import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import ShopPageListItem from "./ShopPageListItem/ShopPageListItem";
import styles from "./ShopPageList.module.css";
import ShopPageListFilter from "../ShopPageListFilter/ShopPageListFilter";

function ShopPageList(props) {
  const appState = useContext(StateContext);
  //console.log(appState.activeShopPageList);
  return (
    <div className={styles.shopPageListContainer}>
      <ShopPageListFilter />
      <div className={styles.shopPageListItemsContainer}>
        {appState.activeShopPageItems.map(item => {
          return <ShopPageListItem category={item.category} id={item.id} key={item.id} image={item.imageUrl} name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
}

export default ShopPageList;

/*default route to this component is all
- grab the activeShopPageList value,  
*/
