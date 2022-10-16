import { ICartDispatch } from "../../context/CartContext/interfaces"
import { FileActionsEnum } from "./interfaces"

let dispatch: ICartDispatch

const setCartContexDispatch = (reciveDispatch: ICartDispatch) => {
    dispatch = reciveDispatch
}


const toggleCartOpen = () => {
    dispatch({ type: FileActionsEnum.TOGGLE_CART_OPEN })
}

const CartActions = {
    toggleCartOpen
}

export {
    setCartContexDispatch,
    CartActions
}