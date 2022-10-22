import { JSDOM } from 'jsdom'

import { BlogQueries } from "../../query"
import { ShopifyProvider } from "../../ShopifyProvider"

const heroBannerTag = process.env.HERO_BANNER_TAG ?? ""

const getActionHeroBanner = (contentHtml: string) => {
    const dom = new JSDOM(contentHtml);
    const aTag = dom.window.document.querySelector("a")

    return {
        path: aTag?.getAttribute('href'),
        text: aTag?.textContent,
    }
}

const getPrimaryColorHeroBanner = (contentHtml: string) => {
    const dom = new JSDOM(contentHtml);
    const primaryColorTag = dom.window.document.querySelector("#primary-color")
    return primaryColorTag?.textContent
}

const getSecondColorHeroBanner = (contentHtml: string) => {
    const dom = new JSDOM(contentHtml);
    const secondColorTag = dom.window.document.querySelector("#second-color")
    return secondColorTag?.textContent
}

const getHeroBannerDescription = (contentHtml: string) => {
    const dom = new JSDOM(contentHtml);
    const descriptionTag = dom.window.document.querySelector("#description")
    return descriptionTag?.textContent
}

const getHeroBanners = async () => {
    const heroBanners = await ShopifyProvider(
        BlogQueries.getBlogByHandle(heroBannerTag)
    )

    const mapedHeroBanners = heroBanners.data.blog.articles.edges.map((heroBanner: any) => (
        {
            title: heroBanner.node.title,
            description: getHeroBannerDescription(heroBanner.node.contentHtml),
            img: {
                src: heroBanner.node.image.url,
                alt: heroBanner.node.image.altText 
            },
            action: getActionHeroBanner(heroBanner.node.contentHtml),
            primaryColor: getPrimaryColorHeroBanner(heroBanner.node.contentHtml),
            secondColor: getSecondColorHeroBanner(heroBanner.node.contentHtml)
        }
    ))

    return mapedHeroBanners ?? []
}

export { getHeroBanners }