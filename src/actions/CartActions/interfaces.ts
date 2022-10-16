import { ICartState } from "../../context/CartContext/interfaces"

enum FileActionsEnum {
    TOGGLE_CART_OPEN
}

interface ICartReducerAction {
    type: FileActionsEnum
    payload?: ICartState
}

export {
    FileActionsEnum,
    type ICartReducerAction
}