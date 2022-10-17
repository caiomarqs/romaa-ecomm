import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import { ColletionShopifyService, FixedOffersShopifyService, ProductShopifyService } from '../lib/shopify'
import { Nav } from '../src/components'
import { CartProvider } from '../src/context'
import { HomePage } from '../src/pages'

const Home: NextPage = ({ products, collectionsMenu, fixedOffers }: any) => {

  useEffect(() => {
    console.log(fixedOffers)
  }, [])

  return (
    <>
      <Head>
        <title>Camisetas Romã</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Camistas Romã, a melhor loja de peças básicas oversized" />
        <meta property="og:title" content="Camisetas Romã" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:/camisetasroma.com.br" />
        <meta property="og:image" content="https://camisetasroma.com.br/share.png" />
        <meta property="og:description" content="Camistas Romã, a melhor loja de peças básicas oversized" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Camisetas Romã" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <CartProvider>
        <Nav
          collectionsMenu={collectionsMenu}
          fixedOffers={fixedOffers}
        />
        <HomePage products={products} />
      </CartProvider>
    </>
  )
}

export async function getStaticProps() {
  const products = await ProductShopifyService.getProductsInCollection("frontpage")
  const collectionsMenu = await ColletionShopifyService.getAllCollectionsMenu()
  const fixedOffers = await FixedOffersShopifyService.getFixedOffers()

  return {
    props: {
      products,
      collectionsMenu,
      fixedOffers
    }
  }
}

export default Home
