import { useContext, useEffect, useState } from "react"

import { Transition } from "@headlessui/react"

import { CartActions } from "../../actions/CartActions/actions"
import { CartContext } from "../../context"
import { renderClassNames } from "../../theme"

import { CollectionMenu } from "./ColletionMenu"
import { FixedOffers } from "./FixedOffers"
import { NavLogo } from "./NavLogo"
import {
    navContainer,
    navContent,
    navHeader
} from "./styles"

type NavProps = {
    collectionsMenu: any,
    fixedOffers: any
}

const Nav = ({ collectionsMenu, fixedOffers }: NavProps) => {

    const { cartState } = useContext(CartContext)
    const { cartIsOpen } = cartState

    const [collectionsMenuOpen, setCollectionsMenuOpen] = useState(true)
    const [navBarHeightIntial, setNavBarHeightIntial] = useState(0)
    const [navBarHeightFinal, setNavBarHeightFinal] = useState(0)


    const eventColletionMenuOpen = () => {
        const navScrollHeight = document.getElementById('nav-bar')?.scrollHeight ?? 0

        if (window.scrollY <= navScrollHeight) {
            setCollectionsMenuOpen(true)
        }
        else {
            setCollectionsMenuOpen(false)
        }
    }

    const setHeigthInitialStates = () => {
        setNavBarHeightIntial(document.getElementById('nav-bar')?.scrollHeight ?? 0)
        setNavBarHeightFinal(document.getElementById('logo-bar')?.scrollHeight ?? 0)
    }

    useEffect(() => {
        setHeigthInitialStates()
        document.addEventListener(
            'scroll',
            eventColletionMenuOpen
        )

        return document.removeEventListener('scroll', () => { })
    }, [])

    return (
        <header
            className={renderClassNames(navHeader)}
        >
            <div
                id="nav-bar"
                className={renderClassNames(navContainer)}
                style={{
                    height: collectionsMenuOpen
                        ? navBarHeightIntial
                        : navBarHeightFinal,
                    transition: 'height ease 300ms'
                }}
            >
                <div
                    id="logo-bar"
                    className={renderClassNames(navContent)}
                >
                    <a className="text-md font-bold cursor-pointer justify-self-end">
                        Menu
                    </a>
                    <NavLogo />
                    <button onClick={CartActions.toggleCartOpen}>
                        Cart
                    </button>
                    <Transition
                        show={cartIsOpen}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        I will fade in and out
                    </Transition>
                </div>
                <CollectionMenu
                    show={collectionsMenuOpen}
                    collections={collectionsMenu}
                />
            </div>
            <FixedOffers fixedOffers={fixedOffers}/>
        </header>
    )
}

export { Nav }