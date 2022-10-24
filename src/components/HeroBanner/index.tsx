import { useState } from "react"

import { renderClassNames } from "../../theme"

import { OutlineBaseButton } from "../Buttons"
import { SectionTitle } from "../Typos"

import {
    HeroBannerContainer,
    HeroBannerContent,
    HeroBannerImage,
    HeroBannerSubTitle
} from "./styles"

type HeroBannerProps = {
    heroBanners: any
}

const HeroBanner = ({ heroBanners }: HeroBannerProps) => {

    const [primaryColor] = useState(heroBanners[0].primaryColor)
    const [secondColor] = useState(heroBanners[0].secondColor)

    return (primaryColor && secondColor) && (
        <div className={renderClassNames(HeroBannerContainer)}>
            <img
                className={renderClassNames(HeroBannerImage)}
                alt={heroBanners[0].img.alt}
                src={heroBanners[0].img.src}
            />
            <div className={renderClassNames(HeroBannerContent)}>
                <SectionTitle
                    elementProps={{ style: { color: primaryColor } }}
                >
                    {heroBanners[0].title}
                </SectionTitle>
                <h4
                    className={renderClassNames(HeroBannerSubTitle)}
                    style={{ color: primaryColor }}
                >
                    {heroBanners[0].description}
                </h4>
                <OutlineBaseButton
                    path={heroBanners[0].action.path}
                    className="mt-4"
                    isetColors={{
                        backgroundColor: primaryColor,
                        color: secondColor
                    }}
                >
                    {heroBanners[0].action.text}
                </OutlineBaseButton>
            </div>
        </div>
    )
}

export { HeroBanner }