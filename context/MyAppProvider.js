import React from "react";
import { useImmerReducer } from "use-immer";
import MyAppReducer from "../reducers/MyAppReducer";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { SHOP_DATA } from "../data/shop-data";

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

function MyAppProvider(props) {
  const [state, dispatch] = useImmerReducer(MyAppReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{props.children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default MyAppProvider;
