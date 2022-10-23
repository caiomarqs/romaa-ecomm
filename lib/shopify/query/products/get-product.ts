const getProductsInCollection = (collectionName: string): string => `
  {
    collection(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            availableForSale
            description
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants(first: 10) {
              edges {
                node {
                  title
                  availableForSale
                }
              }
            }
            tags
            images(first: 2) {
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