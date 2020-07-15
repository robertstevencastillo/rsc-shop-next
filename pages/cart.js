import React from "react";
import Head from "next/head";

function Cart(props) {
  return (
    <>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="[YOUR-API-KEY]" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      </Head>
      <p>Welcome to the cart page</p>
    </>
  );
}

export default Cart;
