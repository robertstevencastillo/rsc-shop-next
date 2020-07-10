import React, { useContext } from "react";
import StateContext from "../../context/StateContext";

function Shop(props) {
  const appState = useContext(StateContext);

  return (
    <>
      {appState.hats.items.map(hat => {
        return (
          <div>
            <p>{hat.name}</p>
            <span>
              <img src={hat.imageUrl} />
            </span>
          </div>
        );
      })}
      {appState.shoes.items.map(shoe => {
        return <p>{shoe.name}</p>;
      })}
      {appState.mens.items.map(men => {
        return <p>{men.name}</p>;
      })}
      {appState.womens.items.map(women => {
        return <p>{women.name}</p>;
      })}
      {appState.jackets.items.map(jacket => {
        return <p>{jacket.name}</p>;
      })}
      {appState.pants.items.map(pants => {
        return (
          <div>
            <p>{pants.name}</p>
            <img src={pants.imageUrl} />
          </div>
        );
      })}
    </>
  );
}

export default Shop;
