import { createContext, useReducer } from "react"

import { 
    cartReducer, 
    setCartContexDispatch 
} from "../../actions"

import {
    ICartContext,
    ICartProvider,
    ICartState
} from "./interfaces"

const initialCartState: ICartState = {
    cartIsOpen: false
}

const intialCartContex: ICartContext = {
    cartState: initialCartState,
    dispatch: () => { }
}

const CartContext = createContext<ICartContext>(intialCartContex)

const CartProvider = (props: ICartProvider) => {

    const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

    setCartContexDispatch(dispatch)

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }