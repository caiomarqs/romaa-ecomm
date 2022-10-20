import { INavDispatch } from "../../context/NavContext/interfaces"
import { NavActionsEnum } from "./interfaces"

let dispatch: INavDispatch

const setNavContexDispatch = (reciveDispatch: INavDispatch) => {
    dispatch = reciveDispatch
}


const toggleGeneralMenuOpen = () => {
    dispatch({ type: NavActionsEnum.TOGGLE_GENERAL_OPEN })
}

const closeGeneralMenu = () => {
    dispatch({
        type: NavActionsEnum.CLOSE_GENERAL_MENU,
        payload: { generalMenuIsOpen: false }
    })
}

const NavActions = {
    toggleGeneralMenuOpen,
    closeGeneralMenu
}

export {
    setNavContexDispatch,
    NavActions
}