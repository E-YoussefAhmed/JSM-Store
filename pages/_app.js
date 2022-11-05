import React, { useEffect } from "react";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const addPaypalScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    addPaypalScript();
  }, []);
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
