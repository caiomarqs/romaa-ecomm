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

const setCollectionsMenuOpen = (collectionsMenuOpen: boolean) => {
    dispatch({
        type: NavActionsEnum.SET_COLLECTION_MENU_OPEN,
        payload: { collectionsMenuOpen }
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

const closeFixedOffers = () => {
    dispatch({ type: NavActionsEnum.CLOSE_FIXED_OFFERS })
}

const closeGeneralMenu = () => {
    dispatch({ type: NavActionsEnum.CLOSE_GENERAL_MENU })
}

const NavActions = {
    toggleGeneralMenuOpen,
    closeGeneralMenu,
    setCollectionsMenu,
    setColorsMenu,
    closeFixedOffers,
    setCollectionsMenuOpen
}

export {
    setNavContexDispatch,
    NavActions
}