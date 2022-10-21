import { useContext } from 'react'
import {
    Bars2Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

import { NavContext } from '../../../context'
import { renderClassNames } from '../../../theme'
import { NavActions } from '../../../actions'

import { menuIcon } from '../styles'

const GeneralMenuIcon = () => {

    const { navState } = useContext(NavContext)
    const { generalMenuIsOpen } = navState

    return (
        <div
            className={renderClassNames(menuIcon)}
            onClick={NavActions.toggleGeneralMenuOpen}
        >
            {
                generalMenuIsOpen
                    ? <XMarkIcon height={24} />
                    : <Bars2Icon height={24} />
            }
        </div>
    )
}

export { GeneralMenuIcon }