const domain = process.env.SHOPFY_STORE_DOMAIN
const storeFrontSlug = process.env.SHOPFY_STOREFRONT_ACCESSTOKEN
const adminSlug = process.env.SHOPFY_ADMIN_ACCESSTOKEN

const ShopifyProvider = async (query: string, isAdmin: boolean = false) => {

    let URL = `https://${domain}/api/2022-10/graphql.json`

    const requestHeaders: HeadersInit = new Headers()

    if (isAdmin) {
        URL = `https://${domain}/admin/api/2022-10/graphql.json`
        requestHeaders.set('X-Shopify-Access-Token', adminSlug ?? "")
    }
    else{
        requestHeaders.set('X-Shopify-Storefront-Access-Token', storeFrontSlug ?? "")
    }

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