import { INavDispatch } from "../../context/NavContext/interfaces"
import { NavActionsEnum } from "./interfaces"

let dispatch: INavDispatch

const setNavContexDispatch = (reciveDispatch: INavDispatch) => {
    dispatch = reciveDispatch
}

const setCollectionsMenu = (collectionsMenu: any) => {
    dispatch({
        type: NavActionsEnum.SET_COLLECTIONS_MENU,
        payload: { collectionsMenu }
    })
}

const setColorsMenu = (colorsMenu: any) => {
    dispatch({
        type: NavActionsEnum.SET_COLORS_MENU,
        payload: { colorsMenu }
    })
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
    closeGeneralMenu,
    setCollectionsMenu,
    setColorsMenu
}

export {
    setNavContexDispatch,
    NavActions
}