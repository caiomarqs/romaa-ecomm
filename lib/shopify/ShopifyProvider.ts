const domain = process.env.SHOPFY_STORE_DOMAIN
const slug = process.env.SHOPFY_STOREFRONT_ACCESSTOKEN

const ShopifyProvider = async (query: string) => {
    const URL = `https://${domain}/api/2022-10/graphql.json`

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('X-Shopify-Storefront-Access-Token', slug ?? "")
    requestHeaders.set('Accept', 'application/json')
    requestHeaders.set('Content-Type', 'application/json')

    const options: RequestInit = {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify({ query }),
    }

    try {
        const data = await fetch(URL, options).then((response) => {
            return response.json()
        })

        return data
    } catch (error) {
        throw new Error("Isn't possible call Shopify")
    }
}

export { ShopifyProvider }