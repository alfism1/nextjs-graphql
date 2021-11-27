import React, { } from 'react';
import { BlogLayout } from 'components/templates/'

import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <BlogLayout>
      <Component {...pageProps} />
    </BlogLayout>
  )
}

export default MyApp
