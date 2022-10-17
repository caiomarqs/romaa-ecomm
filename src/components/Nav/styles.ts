import { TailWindClassType } from "../../theme/types"

const navHeader: TailWindClassType = [
    'sticky',
    'top-0',
    'z-20',
]

const navContainer: TailWindClassType = [
    'border-b',
    'bg-[#ffffff60]',
    'backdrop-blur-xl'
]

const navContent: TailWindClassType = [
    'flex',
    'justify-between',
    'max-w-6xl',
    'px-4',
    'py-6',
    'mx-auto',
    'lg:max-w-screen-2xl'
]

const collectionsMenu: TailWindClassType = [
    'flex',
    'justify-around',
    'mx-auto',
    'lg:max-w-screen-sm',
    'pb-2',
]

const collectionMenuLink: TailWindClassType = [
    'text-sm',
    'subpixel-antialiased',
    'font-normal',
    'cursor-pointer',
    'pb-2'
]

const fixedOffersContainer: TailWindClassType = [
    'bg-red',
    'absolute',
    'w-100'
]

const fixedOffersTitles: TailWindClassType = [
    'flex',
    'mx-auto',
    'lg:max-w-screen-sm',
    'py-2',
    'flex-col'
]


export {
    navContainer,
    navContent,
    navHeader,
    collectionsMenu,
    collectionMenuLink,
    fixedOffersContainer,
    fixedOffersTitles
}