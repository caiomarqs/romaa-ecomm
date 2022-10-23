import { TailWindClassType } from "../../theme/types"

const navHeader: TailWindClassType = [
    'sticky',
    'top-0',
    'z-20',
]

const navContainer: TailWindClassType = [
    'border-b',
    'bg-[#ffffffb9]',
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

const collectionsMenuContainer: TailWindClassType = [
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
    'hover:text-main',
    'ease-linear',
    'duration-150'
]

const fixedOffersContainer: TailWindClassType = [
    'bg-main',
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
    'hover:text-main',
    'ease-linear',
    'duration-150'
]

const GeneralMenuContainer = (
    showFixedOffers: boolean | undefined,
    collectionsMenuOpen: boolean | undefined
): TailWindClassType => {

    const styles: TailWindClassType = [
        'border-r',
        'bg-[#ffffffb9]',
        'backdrop-blur-xl',
        'px-6',
        'fixed',
        'top-0',
        'z-[-1]',
        'h-[100%]',
        'transition-[width, opacity, visibility]',
        'ease',
        'duration-300'
    ]

    if (showFixedOffers && collectionsMenuOpen) {
        styles.push('pt-[168px]')
        return styles
    }

    if (collectionsMenuOpen) {
        styles.push('pt-[8.5rem]')
        return styles
    }

    if (showFixedOffers) {
        styles.push('pt-[8.25rem]')
        return styles
    }

    styles.push('pt-[6.25rem]')
    return styles
}

const GeneralMenuContainerOpen: TailWindClassType = [
    'w-[46rem]',
    'opacity-100',
    'visible'
]

const GeneralMenuContainerClose: TailWindClassType = [
    'w-[0]',
    'opacity-0',
    'invisible'
]

const generalMenuSectionTitle: TailWindClassType = [
    'text-md',
    'subpixel-antialiased',
    'font-bold',
    'pb-4',
    'text-zinc-600',
]

const generalMenuSubTitle: TailWindClassType = [
    'text-sm',
    'subpixel-antialiased',
    'font-medium',
    'pb-2',
    'text-zinc-600',
]

const generalMenuSectionContainer = (
    isFirstSection: boolean,
    isLastSection: boolean
): TailWindClassType => {
    const styles: TailWindClassType = [
        'flex',
        'flex-col',
        'px-2'
    ]

    if (!isFirstSection) {
        styles.push('mt-6')
    }

    if (!isLastSection) {
        styles.push('border-b')
    }

    return styles
}

const generalMenuItensContainer: TailWindClassType = [
    'flex',
    'flex-col',
    'p-2',
]

const generalMenuLink: TailWindClassType = [
    'text-sm',
    'subpixel-antialiased',
    'font-normal',
    'cursor-pointer',
    'pb-4',
    'text-zinc-500',
    'hover:text-main',
    'ease-linear',
    'duration-150'
]


export {
    navContainer,
    navContent,
    navHeader,
    logoContainer,
    collectionsMenuContainer,
    collectionMenuLink,
    fixedOffersContainer,
    fixedOffersTitles,
    fixedClose,
    menuIcon,
    GeneralMenuContainer,
    GeneralMenuContainerOpen,
    GeneralMenuContainerClose,
    generalMenuSectionTitle,
    generalMenuItensContainer,
    generalMenuLink,
    generalMenuSectionContainer,
    generalMenuSubTitle
}