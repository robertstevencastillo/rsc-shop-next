import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import ShopPageListItem from "./ShopPageListItem/ShopPageListItem";
import styles from "./ShopPageList.module.css";
import ShopPageListFilter from "../ShopPageListFilter/ShopPageListFilter";

function ShopPageList(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const router = useRouter();

  useEffect(() => {
    appDispatch({ type: `${router.query.category.toUpperCase()}` });
  }, []);

  return (
    <>
      <div className={styles.shopPageListContainer}>
        <ShopPageListFilter />
        <div className={styles.shopPageListItemsContainer}>
          {appState.activeShopPageItems.map(item => {
            return <ShopPageListItem category={item.category} id={item.id} key={item.id} image={item.imageUrl} name={item.name} price={item.price} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ShopPageList;

/*default route to this component is all
- grab the activeShopPageList value,  
*/

// import styles from "../styles/global.css";
// import stylesIndex from "../styles/index.css";
