const getProductsInCollection = (collectionName: string): string => `
    {
        collection(handle: "${collectionName}") {
            title
            products(first: 25) {
                edges {
                  node {
                    id
                    title
                    handle
                    availableForSale
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    images(first: 10) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                  }
                }
            }
        }
    }
`

export {
    getProductsInCollection
}