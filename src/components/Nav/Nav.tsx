import { useContext, useEffect, useState } from "react"

import { Transition } from "@headlessui/react"

import { CartContext } from "../../context"
import { renderClassNames } from "../../theme"

import { CollectionMenu } from "./CollectionMenu"
import { FixedOffers } from "./FixedOffers"
import { NavLogo } from "./NavLogo"
import {
    navContainer,
    navContent,
    navHeader
} from "./styles"
import { MenuIcons } from "./MenuIcons"
import { GeneralMenuIcon } from "./GeneralMenu/GeneralMenuIcon"
import { GeneralMenu } from "./GeneralMenu"
import { NavActions } from "../../actions"


type NavProps = {
    collectionsMenu: any,
    fixedOffers: any,
    colorsMenu: any
}

const Nav = ({ collectionsMenu, fixedOffers, colorsMenu }: NavProps) => {

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
        if(collectionsMenu && colorsMenu) {
            NavActions.setCollectionsMenu(collectionsMenu)
            NavActions.setColorsMenu(colorsMenu)
        } 

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
                    <GeneralMenuIcon />
                    <NavLogo />
                    <MenuIcons />
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
            <GeneralMenu />
        </header>
    )
}

export { Nav }