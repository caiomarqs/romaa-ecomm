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
                generalMenuIsOpen: action.payload?.generalMenuIsOpen ?? false
            }
        }
        default:
            return state;
    }

}

export {
    navReducer
}