import Link from "next/link"
import { CSSProperties, useEffect, useState } from "react"
import { renderClassNames, TailWindClassType } from "../../theme"

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

    const [primaryColor] = useState(heroBanners[0].primaryColor)
    const [secondColor] = useState(heroBanners[0].secondColor)

    const [buttonStyles, setButtonStyles] = useState({
        backgroundColor: 'transparent',
        borderColor: primaryColor,
        color: primaryColor
    })

    const onMouseOver = () => {
        setButtonStyles({
            backgroundColor: primaryColor,
            borderColor: primaryColor,
            color: secondColor
        })
    }

    const onMouseLeave = () => {
        setButtonStyles({
            backgroundColor: 'transparent',
            borderColor: primaryColor,
            color: primaryColor
        })
    }

    return (primaryColor && secondColor) && (
        <div className={renderClassNames(HeroBannerContainer)}>
            <img
                className={renderClassNames(HeroBannerImage)}
                alt={heroBanners[0].img.alt}
                src={heroBanners[0].img.src}
            />
            <div className={renderClassNames(HeroBannerContent)}>
                <h1
                    className={renderClassNames(HeroBannerTitle)}
                    style={{ color: primaryColor, }}
                >
                    {heroBanners[0].title}
                </h1>
                <h4
                    className={renderClassNames(HeroBannerSubTitle)}
                    style={{ color: primaryColor }}
                >
                    {heroBanners[0].description}
                </h4>
                <Link href={heroBanners[0].action.path} >
                    <span
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}
                        className={renderClassNames(HeroBannerButton)}
                        style={buttonStyles}
                    >
                        {heroBanners[0].action.text}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export { HeroBanner }