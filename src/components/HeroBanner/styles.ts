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

const HeroBannerTitle: TailWindClassType = [
    'text-2xl',
    'font-black'
]

const HeroBannerSubTitle: TailWindClassType = [
    'text-base',
    'font-light'
]

const HeroBannerButton: TailWindClassType = [
    'cursor-pointer',
    'py-2',
    'px-4',
    'mt-4',
    'border',
    'rounded-md',
    'text-sm',
    'capitalize',
    'font-bold',
    'w-fit',
    'transition-[color, background-color]',
    'ease',
    'duration-150'
]

export {
    HeroBannerContainer,
    HeroBannerContent,
    HeroBannerImage,
    HeroBannerTitle,
    HeroBannerSubTitle,
    HeroBannerButton
}