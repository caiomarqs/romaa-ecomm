import { BlogQueries } from "../../query"
import { ShopifyProvider } from "../../ShopifyProvider"

const fixedOffersTag = process.env.FIXED_OFFERS_TAG ?? ""

const getFixedOffers = async () => {
    const fixedOffers = await ShopifyProvider(
        BlogQueries.getBlogByHandle(fixedOffersTag)
    )

    const mapFixedOffers = fixedOffers.data.blog.articles.edges.map((fixedOffer: any) => (
        fixedOffer.node.title
    ))

    return mapFixedOffers ?? []
}

export { getFixedOffers }