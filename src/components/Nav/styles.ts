import { TailWindClassType } from "../../theme/types"

const navContatiner: TailWindClassType = [
    'border-b sticky',
    'top-0',
    'z-20',
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

export { navContatiner, navContent, collectionsMenu, collectionMenuLink }