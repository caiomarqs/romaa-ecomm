import { TailWindClassType } from "../../theme";

const HeroBannerContainer: TailWindClassType = [
    'h-hero-banner',
    'relative',
    'min-h-[45rem]',
    'bg-black'
]

const HeroBannerContent: TailWindClassType = [
    'absolute',
    'h-48',
    'min-w-[24rem]',
    'p-4',
    'left-12',
    'bottom-12',
    'flex',
    'flex-col'
]

const HeroBannerImage: TailWindClassType = [
    'w-[100%]',
    'h-[100%]',
    'object-cover'
]

const HeroBannerSubTitle: TailWindClassType = [
    'text-base',
    'font-light'
]

export {
    HeroBannerContainer,
    HeroBannerContent,
    HeroBannerImage,
    HeroBannerSubTitle
}