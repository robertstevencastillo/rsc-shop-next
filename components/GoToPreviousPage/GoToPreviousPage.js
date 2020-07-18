import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./GoToPreviousPage.module.css";

function GoToPreviousPage(props) {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.jobDetailsAsideBackSearchContainer}>
      <span>
        <img alt="search back arrow " className={styles.jobDetailsSidebarArrow} src="https://cdn1.iconfinder.com/data/icons/menu-3-3/32/back_left_arrow_point-512.png" />{" "}
      </span>
      <Link href={"/shop/[category]"} as={`/shop/${router.query.category}`}>
        <span>Back To Search</span>
      </Link>
    </div>
  );
}

export default GoToPreviousPage;
