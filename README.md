# ShopifyStorefrontApi + Next.js

## Prozess
1. Erstellte Shopify Store [demo-store-test2](https://demo-store-test2.myshopify.com).
2. Nextjs  app erstellt  ```npx create-next-app -e with-tailwind shopify-demo```.
3. Anmeldedaten in ```.env.local``` gespeichert.
4. Verwendet [js-buy-sdk](https://shopify.github.io/js-buy-sdk/index.html) Bibliothek, um Produkte aus dem Shop abzurufen.
5. Neuen `Client` erstellt mit `domain`, `accessToken` .
6. `fetchQuery` über `Client` aufgerufen.
7. `products` erhalten und `map` über sie, um einzelne `product` zu erhalten.
8. Tailwdincss für minimales Styling