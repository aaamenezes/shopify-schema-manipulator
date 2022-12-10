import React from 'react'
import '@shopify/polaris/build/esm/styles.css'
// import '../src/styles/reset.scss'
// import '../src/styles/variables.scss'
// import '../src/styles/base.scss'
// import '../src/styles/style.scss'
// import '../src/styles/button.scss'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shopify Schema Manipulator</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
