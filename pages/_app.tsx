import React, { } from 'react';
import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app'

import { withRouter } from 'next/router'
import { BlogLayout, MainLayout, StarbucksLayout } from "../components/templates"

const layouts = {
  main: MainLayout,
  blog: BlogLayout,
  starbucks: StarbucksLayout,
}

function MyApp({ Component, pageProps, router }: AppProps) {
  let Layout;
  switch (router.pathname.split("/")[1]) {
    case "blog":
      Layout = layouts['blog']
      break;
    case "starbucks":
      Layout = layouts['starbucks']
      break;
    default:
      Layout = layouts['main']
      break;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default withRouter(MyApp)
