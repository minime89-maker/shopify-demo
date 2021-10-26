import Head from 'next/head'
import  Client  from 'shopify-buy'
import React from 'react'

const client = Client.buildClient({
  'domain':process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  'storefrontAccessToken': process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
});

export default function Home() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    client.product.fetchQuery().then((products) => {
      setProducts(products);
      console.log(products);
    })
  }, []);

  {!products && <p>Loading...</p>}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Shopify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-semibold text-red-600 mb-10">
          Shopify Demo Store
        </h1>

        <div className="flex flex-wrap items-baseline justify-around max-w-6xl mt-6 text-left space-y-8 sm:w-full ">
         {products && products.map((product) => {
           return (
              <div className="w-full sm:w-1/2 xl:w-1/3 p-4 hover:shadow-md" key={product.id}>
                <img src={product.images[0].src} alt={product.title} className="rounded-md shadow-md " />
                <h2 className="text-2xl font-semibold mt-4 pb-2">{product.title}</h2>
                <p className="text-gray-600 text-md">{product.description}</p>
                
                <div className='flex  items-center justify-between py-8'> 
                <a href={`http://demo-store-test2.myshopify.com/products/${product.handle}`} className='bg-red-500 text-white py-2 px-3 rounded-md text-xl hover:ring-4 ring-red-200' >Buy now</a>
                <p className="text-2xl font-bold text-gray-600">{product.variants[0].priceV2.amount} {product.variants[0].priceV2.currencyCode} </p>
                </div>
             
              </div>
           )
         })}      
        </div>
      </main>
    </div>
  )
}
