import { ICartState } from '../../context/CartContext/interfaces'

import {
    ICartReducerAction,
    FileActionsEnum
} from './interfaces'

const cartReducer = (state: ICartState, action: ICartReducerAction): ICartState => {

    switch (action.type) {
        case FileActionsEnum.TOGGLE_CART_OPEN: {
            return { ...state, cartIsOpen: !state.cartIsOpen }
        }
        default:
            return state;
    }

}

export {
    cartReducer
}