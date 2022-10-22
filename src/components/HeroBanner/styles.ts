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

const HeroBannerTitle = (primaryColor: string): TailWindClassType=> {
    return [
        `text-[${primaryColor}]`,
        'text-2xl',
        'font-black'
    ]
}

const HeroBannerSubTitle = (primaryColor: string): TailWindClassType=> {
    return [
        `text-[${primaryColor}]`,
        'text-base',
        'font-light'
    ]
}

const HeroBannerButton = (primaryColor: string, secondColor: string): TailWindClassType=> {
    return [
        'cursor-pointer',
        'py-2',
        'px-4',
        'mt-4',
        `bg-[${primaryColor}]`,
        'border',
        `border-[${primaryColor}]`,
        'rounded-md',
        `text-[${primaryColor}]`,
        'text-sm',
        'capitalize',
        'font-bold',
        'w-fit',
        'hover:border-[transparent]',
        `hover:text-[${secondColor}]`,
        `hover:bg-[${primaryColor}]`,
        'transition-[color, background-color]',
        'ease',
        'duration-150'
    ]
}

export {
    HeroBannerContainer,
    HeroBannerContent,
    HeroBannerImage,
    HeroBannerTitle,
    HeroBannerSubTitle,
    HeroBannerButton
}