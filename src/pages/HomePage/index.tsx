import { HeroBanner } from "../../components"
import { PageContainer } from "../../components/PageContainer"
import { ProductList } from "../../components/ProductList"

type HomePageProps = {
    products: any,
    heroBanners: any
}

const HomePage = ({ products, heroBanners }: HomePageProps) => {
    return (
        <>
            <HeroBanner heroBanners={heroBanners} />
            <PageContainer>
                <ProductList products={products} />
                <ProductList products={products} />
                <ProductList products={products} />
            </PageContainer>
        </>

    )
}

export { HomePage }