import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import type { AppProps } from "next/app";

// import { Provider } from 'react-redux'
// import store from '../example_app/store'

import { wrapper } from "../redux/store";

import { withRouter } from "next/router";
import {
  BlogLayout,
  MainLayout,
  StarbucksLayout,
} from "../components/templates";

const layouts = {
  main: MainLayout,
  blog: BlogLayout,
  starbucks: StarbucksLayout,
};

function MyApp({ Component, pageProps, router }: AppProps) {
  let Layout;
  switch (router.pathname.split("/")[1]) {
    case "blog":
      Layout = layouts["blog"];
      break;
    case "starbucks":
      Layout = layouts["starbucks"];
      break;
    case "chat":
      Layout = React.Fragment
      break;
    default:
      Layout = layouts["main"];
      break;
  }
  return (
    // <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    // </Provider>
  );
}

export default wrapper.withRedux(withRouter(MyApp));
