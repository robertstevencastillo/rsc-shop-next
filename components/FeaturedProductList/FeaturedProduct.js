import React, { useContext } from "react";
import styles from "./FeaturedProduct.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";

function FeaturedProduct(props) {
  const router = useRouter();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleViewFeaturedItemClick(event) {
    //    <Link href={`shop/[category]/[categoryItem]`} as={`shop/${props.category}/${props.id}`}>
    event.preventDefault();
    appDispatch({ type: `${props.category.toUpperCase()}` });
    router.push("/shop/[category]/[categoryItem]", `/shop/${props.category}/${props.id}`);
  }

  return (
    <div className={styles.featuredProductContainer} onClick={handleViewFeaturedItemClick}>
      <div className={styles.featuredProductImgContainer}>
        <img src={props.imageUrl} />
      </div>
      <div className={styles.featuredProductDetailsContainer}>
        <p>{props.name}</p>
        <p>${props.price}</p>
        <button onClick={handleViewFeaturedItemClick}>View Item</button>
      </div>
    </div>
  );
}

export default FeaturedProduct;
