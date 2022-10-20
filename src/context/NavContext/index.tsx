import { createContext, useReducer } from "react"

import { 
    setNavContexDispatch, 
    navReducer
} from "../../actions"

import {
    INavContext,
    INavProvider,
    INavState
} from "./interfaces"

const initialNavState: INavState = {
    generalMenuIsOpen: false
}

const intialNavContex: INavContext = {
    navState: initialNavState,
    dispatch: () => { }
}

const NavContext = createContext<INavContext>(intialNavContex)

const NavProvider = (props: INavProvider) => {

    const [navState, dispatch] = useReducer(navReducer, initialNavState)

    setNavContexDispatch(dispatch)

    return (
        <NavContext.Provider value={{ navState, dispatch }}>
            {props.children}
        </NavContext.Provider>
    )
}

export { NavContext, NavProvider }