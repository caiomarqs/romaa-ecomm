import Image from "next/image"
import Link from "next/link"
import { currencyFormater } from "../../utils"

type ProductCardProps = {
    product: any
}

const ProductCard = ({ product }: ProductCardProps) => {

    const { handle, title, images, price } = product
    const { url } = images[0]

    return (
        <Link
            href={`/products/${handle}`}
        >
            <a className="group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
                    <div className="relative group-hover:opacity-75 h-72">
                        <Image
                            src={url}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-700">{currencyFormater.format(price)}</p>
            </a>
        </Link>
    )
}

export { ProductCard }