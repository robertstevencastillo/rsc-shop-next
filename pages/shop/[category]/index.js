import React, { useContext } from "react";
import StateContext from "../../../context/StateContext";
import ShopPageList from "../../../components/ShopPageList/ShopPageList";

function ShopIndex(props) {
  const appState = useContext(StateContext);
  return (
    <>
      <ShopPageList />
    </>
  );
}

export default ShopIndex;
