import { PageContainer } from "../../components/PageContainer"
import { ProductList } from "../../components/ProductList"

type HomePageProps = {
    products: any
}

const HomePage = ({ products }: HomePageProps) => {
    return (
        <PageContainer>
            <ProductList products={products}/>
            <ProductList products={products}/>
            <ProductList products={products}/>
        </PageContainer>
    )
}

export { HomePage }