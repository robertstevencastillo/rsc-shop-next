import React, { useReducer } from "react";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import SHOP_DATA from "../data/shop-data";

export default function App({ Component, pageProps }) {
  const initialState = {
    hats: SHOP_DATA.hats,
    shoes: SHOP_DATA.shoes,
    jackets: SHOP_DATA.jackets,
    mens: SHOP_DATA.mens,
    womens: SHOP_DATA.womens,
    pants: SHOP_DATA.pants,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Header />
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Component {...pageProps}></Component>
        </DispatchContext.Provider>
      </StateContext.Provider>
      <Footer />
    </>
  );
}

function reducer(draftState, action) {}
