import { Transition } from "@headlessui/react"
import { useContext } from "react"
import { CartActions } from "../../actions/CartActions/actions"
import { CartContext } from "../../context"
import { renderClassNames } from "../../theme"

import { NavLogo } from "./NavLogo"
import {
    navContatiner,
    navContent
} from "./styles"

const Nav = () => {

    const { cartState } = useContext(CartContext)
    const { cartIsOpen } = cartState

    return (
        <header
            className={
                renderClassNames(navContatiner)
            }
        >
            <div
                className={
                    renderClassNames(navContent)
                }
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
        </header>
    )
}

export { Nav }