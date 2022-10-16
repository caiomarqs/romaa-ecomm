import { ReactNode } from "react"

import { ICartReducerAction } from "../../actions"

interface ICartState {
    cartIsOpen: boolean
}

type ICartDispatch = React.Dispatch<ICartReducerAction> | Function

interface ICartContext {
    cartState: ICartState
    dispatch: ICartDispatch
}

interface ICartProvider {
    children: ReactNode | JSX.Element
}

export {
    type ICartState,
    type ICartContext,
    type ICartProvider,
    type ICartDispatch
}