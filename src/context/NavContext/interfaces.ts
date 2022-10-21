import { ReactNode } from "react"

import { INavReducerAction } from "../../actions/NavActions"

interface INavState {
    generalMenuIsOpen?: boolean,
    collectionsMenu?: any,
    colorsMenu?: any,
}

type INavDispatch = React.Dispatch<INavReducerAction> | Function

interface INavContext {
    navState: INavState
    dispatch: INavDispatch
}

interface INavProvider {
    children: ReactNode | JSX.Element
}

export {
    type INavState,
    type INavContext,
    type INavProvider,
    type INavDispatch
}