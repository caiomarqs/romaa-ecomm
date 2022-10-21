import { HeroBanner } from "../../components"
import { PageContainer } from "../../components/PageContainer"
import { ProductList } from "../../components/ProductList"

type HomePageProps = {
    products: any
}

const HomePage = ({ products }: HomePageProps) => {
    return (
        <>
            <HeroBanner />
            <PageContainer>
                <ProductList products={products} />
                <ProductList products={products} />
                <ProductList products={products} />
            </PageContainer>
        </>

    )
}

export { HomePage }