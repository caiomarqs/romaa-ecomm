import { INavState } from '../../context/NavContext/interfaces'

import {
    NavActionsEnum,
    INavReducerAction
} from './interfaces'

const navReducer = (state: INavState, action: INavReducerAction): INavState => {

    switch (action.type) {
        case NavActionsEnum.TOGGLE_GENERAL_OPEN: {
            return { ...state, generalMenuIsOpen: !state.generalMenuIsOpen }
        }
        case NavActionsEnum.CLOSE_GENERAL_MENU: {
            return {
                ...state,
                generalMenuIsOpen: false
            }
        }
        case NavActionsEnum.SET_COLLECTIONS_MENU: {
            return {
                ...state,
                collectionsMenu: action.payload?.collectionsMenu ?? []
            }
        }
        case NavActionsEnum.SET_COLORS_MENU: {
            return {
                ...state,
                colorsMenu: action.payload?.colorsMenu ?? []
            }
        }
        case NavActionsEnum.CLOSE_FIXED_OFFERS: {
            return {
                ...state,
                showFixedOffers: false
            }
        }
        case NavActionsEnum.SET_COLLECTION_MENU_OPEN: {
            return {
                ...state,
                collectionsMenuOpen: action.payload?.collectionsMenuOpen
            }
        }
        default:
            return state
    }
}

export {
    navReducer
}