import { HeroBanner, Highlights } from "../../components"
import { PageContainer } from "../../components/PageContainer"
import { ProductList } from "../../components/ProductList"

type HomePageProps = {
    products: any,
    heroBanners: any
}

const HomePage = ({ products, heroBanners }: HomePageProps) => {

    const highlights = products.filter((product: any) => (
        product.tags.includes("Novidades"))
    )

    const restOfProducts = products.filter((product: any) => (
        !product.tags.includes("Novidades"))
    )

    return (
        <>
            <HeroBanner heroBanners={heroBanners} />
            <PageContainer>
                <Highlights highlights={highlights} />
                <ProductList products={restOfProducts} />
                <ProductList products={restOfProducts} />
                <ProductList products={restOfProducts} />
            </PageContainer>
        </>

    )
}

export { HomePage }