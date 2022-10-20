import {
    UserCircleIcon,
    ShoppingBagIcon
} from '@heroicons/react/24/outline'

import { renderClassNames } from '../../theme'

import { menuIcon } from './styles'

const MenuIcons = () => {
    return (
        <div className='flex'>
            <UserCircleIcon
                className={`mr-2 ${renderClassNames(menuIcon)}`}
                height={25}
            />
            <ShoppingBagIcon
                className={renderClassNames(menuIcon)}
                height={24}
            />
        </div>
    )
}

export { MenuIcons }