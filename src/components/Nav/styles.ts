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
    'lg:max-w-screen-2xl',
    'relative'
]

const logoContainer: TailWindClassType = [
    'cursor-pointer',
    'absolute'
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
    'pb-2',
    'text-zinc-500',
    'hover:text-red',
    'ease-linear',
    'duration-150'
]

const fixedOffersContainer: TailWindClassType = [
    'bg-red',
    'flex',
    'py-1',
    'px-2',
    'text-white',
    'justify-center',
    'h-[2rem]',
    'relative'
]

const fixedOffersTitles: TailWindClassType = [
    'flex',
    'justify-center',
    'flex-1',
]

const fixedClose: TailWindClassType = [
    'cursor-pointer',
    'absolute',
    'right-2'
]

const menuIcon: TailWindClassType = [
    'cursor-pointer',
    'text-zinc-500',
    'hover:text-red',
    'ease-linear',
    'duration-150'
]


export {
    navContainer,
    navContent,
    navHeader,
    logoContainer,
    collectionsMenu,
    collectionMenuLink,
    fixedOffersContainer,
    fixedOffersTitles,
    fixedClose,
    menuIcon
}