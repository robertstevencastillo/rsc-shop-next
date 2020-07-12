import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import { useImmerReducer } from "use-immer";
import SHOP_DATA from "../data/shop-data";
import styles from "./MyApp.module.css";
import MyAppReducer from ".././reducers/MyAppReducer";

export default function MyApp({ Component, pageProps }) {
  const initialState = {
    hats: SHOP_DATA.hats,
    shoes: SHOP_DATA.shoes,
    jackets: SHOP_DATA.jackets,
    mens: SHOP_DATA.mens,
    womens: SHOP_DATA.womens,
    pants: SHOP_DATA.pants,
    clothingCategories: ["all", "mens", "womens", "hats", "pants", "jackets", "shoes"],
    activeShopPageList: "all",
    activeShopPageItems: [...SHOP_DATA.hats.items, ...SHOP_DATA.shoes.items, ...SHOP_DATA.jackets.items, ...SHOP_DATA.mens.items, ...SHOP_DATA.womens.items, ...SHOP_DATA.pants.items],
  };

  const [state, dispatch] = useImmerReducer(MyAppReducer, initialState);
  return (
    <>
      <Header />
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className={styles.myAppContainer}>
            <Component {...pageProps}></Component>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
      <Footer />
    </>
  );
}
