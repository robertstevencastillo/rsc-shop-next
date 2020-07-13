import React from "react";
import myAppStyles from "./MyAppLayout.module.css";

function MyAppLayout(props) {
  return <div className={myAppStyles.myAppContainer}>{props.children}</div>;
}

export default MyAppLayout;
