import Link from "next/link"
import { useState } from "react"
import { renderClassNames } from "../../theme"

import {
    HeroBannerContainer,
    HeroBannerContent,
    HeroBannerImage,
    HeroBannerSubTitle,
    HeroBannerTitle,
    HeroBannerButton
} from "./styles"

type HeroBannerProps = {
    heroBanners: any
}


const HeroBanner = ({ heroBanners }: HeroBannerProps) => {

    const [primaryColor, setPrimaryColor] = useState(heroBanners[0].primaryColor)
    const [secondColor, setSecondColor] = useState(heroBanners[0].secondColor)

    return (primaryColor && secondColor) && (
        <div className={renderClassNames(HeroBannerContainer)}>
            <img
                className={renderClassNames(HeroBannerImage)}
                alt={heroBanners[0].img.alt}
                src={heroBanners[0].img.src}
            />
            <div className={renderClassNames(HeroBannerContent)}>
                <h1 className={renderClassNames(HeroBannerTitle(primaryColor))}>{heroBanners[0].title}</h1>
                <h4 className={renderClassNames(HeroBannerSubTitle(primaryColor))}>{heroBanners[0].description}</h4>
                <Link href={heroBanners[0].action.path}>
                    <span className={renderClassNames(HeroBannerButton(primaryColor, secondColor))}>
                        {heroBanners[0].action.text}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export { HeroBanner }