import { INavState } from "../../context/NavContext/interfaces"

enum NavActionsEnum {
    TOGGLE_GENERAL_OPEN,
    CLOSE_GENERAL_MENU,
    SET_COLLECTIONS_MENU,
    SET_COLORS_MENU,
    CLOSE_FIXED_OFFERS,
    SET_COLLECTION_MENU_OPEN
}

interface INavReducerAction {
    type: NavActionsEnum
    payload?: INavState
}

export {
    NavActionsEnum,
    type INavReducerAction
}