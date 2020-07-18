import React, { useEffect } from "react";
import styles from "./ProductNavBreadCrumb.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductNavBreadCrumb(props) {
  const router = useRouter();
  let tempPathString = [];
  let pathStringArr = [];

  tempPathString = props.router.asPath.split("/");
  tempPathString[0] = "home";
  pathStringArr = tempPathString.map(pathVariable => {
    return pathVariable[0].toUpperCase() + pathVariable.slice(1, pathVariable.length);
  });
  //["Home", "Shop", "Hats"]

  console.log(tempPathString);

  return (
    <div className={styles.productNavBreadCrumbContainer}>
      <div className={styles.productNavBreadCrumbList}>
        {pathStringArr.map(pathStringVariable => {
          return (
            <Link href={props.router.pathname} as={props.router.asPath}>
              <p>{pathStringVariable} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductNavBreadCrumb;
