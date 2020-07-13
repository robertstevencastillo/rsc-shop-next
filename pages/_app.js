import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyAppLayout from "../layouts/MyAppLayout";
import MyAppProvider from "../context/MyAppProvider";
import App from "next/app";
import styles from "../styles/global.css";
import stylesIndex from "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyAppProvider>
        <Header />
        <MyAppLayout>
          <Component {...pageProps}></Component>
        </MyAppLayout>
        <Footer />
      </MyAppProvider>
    </>
  );
}

/* 
This component creates a custom 'App' component. Read more here - https://nextjs.org/docs/advanced-features/custom-app

Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:
Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages
Add global CSS

*/
