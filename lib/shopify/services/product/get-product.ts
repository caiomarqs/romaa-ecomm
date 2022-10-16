import { ProductQueries } from "../../query/products";

import { ShopifyProvider } from "../../ShopifyProvider"

const getProductsInCollection = async (collectionName: string) => {
    const response = await ShopifyProvider(ProductQueries.getProductsInCollection(collectionName))

    const mapProducts = response.data.collection.products.edges?.map((product: any) => {
        return {
            ...product.node,
            price: product.node.priceRange.minVariantPrice.amount,
            images: product.node.images.edges?.map((image: any) => ({
                ...image.node
            }))
        }
    })

    return mapProducts ?? [];
}

export { getProductsInCollection }