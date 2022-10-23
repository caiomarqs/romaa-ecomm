import { ProductQueries } from "../../query"

import { ShopifyProvider } from "../../ShopifyProvider"

const sortProdctsByKey = (prev: any, actual: any, key: string, asc: boolean) => {
    if (prev[`${key}`] < actual[`${key}`]) {
        return asc ? -1 : 1
    }
    if (prev[`${key}`] > actual[`${key}`]) {
        return asc ? 1 : -1
    }
    return 0
}

const getProductsInCollection = async (
    collectionName: string,
    sort: string = "title",
    sortAsc: boolean = true
) => {
    const response = await ShopifyProvider(ProductQueries.getProductsInCollection(collectionName))

    const mapProducts =
        response.data.collection.products.edges?.map((product: any) => {
            return {
                ...product.node,
                price: product.node.priceRange.minVariantPrice.amount,
                images: product.node.images.edges?.map((image: any) => ({
                    ...image.node
                })),
                variants: product.node.variants.edges?.map((variant: any) => ({
                    ...variant.node
                }))
            }
        }).sort((prev: any, actual: any) => (
            sortProdctsByKey(prev, actual, sort, sortAsc)
        ))

    return mapProducts ?? []
}

export { getProductsInCollection, sortProdctsByKey }