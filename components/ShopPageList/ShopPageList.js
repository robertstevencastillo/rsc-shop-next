import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import ShopPageListItem from "./ShopPageListItem/ShopPageListItem";
import styles from "./ShopPageList.module.css";
import ShopPageListFilter from "../ShopPageListFilter/ShopPageListFilter";
import Head from "next/head";

function ShopPageList(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const router = useRouter();

  useEffect(() => {
    appDispatch({ type: `${router.query.category.toUpperCase()}` });
  }, []);

  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <link rel="preconnect" href={`https://app.snipcart.com`} />
        <link rel="preconnect" href={`https://cdn.snipcart.com`} />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
      </Head>

      <div className={styles.shopPageListContainer}>
        <ShopPageListFilter />
        <div className={styles.shopPageListItemsContainer}>
          {appState.activeShopPageItems.map(item => {
            return <ShopPageListItem category={item.category} id={item.id} key={item.id} image={item.imageUrl} name={item.name} price={item.price} />;
          })}
        </div>
      </div>

      <div id="snipcart" data-api-key="ZDZhYjUzZjUtOWI3Mi00ZDQ2LTg5OGEtZDI0ZjU5NGYzNjc5NjM3Mjc4NDYxODY3MjMxODY5" hidden></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
    </>
  );
}

export default ShopPageList;

/*default route to this component is all
- grab the activeShopPageList value,  
*/

// import styles from "../styles/global.css";
// import stylesIndex from "../styles/index.css";
