import { useContext, useEffect, useRef, useState } from "react"
import { NavActions } from "../../../actions"

import { NavContext } from "../../../context"
import { useClickOutSideRef } from "../../../hooks"
import { renderClassNames } from "../../../theme"

import {
    GeneralMenuContainer,
    GeneralMenuContainerClose,
    GeneralMenuContainerOpen
} from "../styles"

import { GeneralMenuSection } from "./GeneralMenuSection"

const GeneralMenu = () => {

    const generalMenuRef = useRef(null)

    const { navState } = useContext(NavContext)
    const {
        generalMenuIsOpen,
        collectionsMenu,
        colorsMenu,
        showFixedOffers,
        collectionsMenuOpen
    } = navState

    const [artigosItens, setArtigosItens] = useState([])
    const [coresItens, setCoresItens] = useState([])

    const mapMenus = (collectionsMenu: any) => (
        collectionsMenu.map((collection: any) => ({
            title: collection.title,
            path: `/collections/${collection.handle}`
        }))
    )

    useClickOutSideRef(generalMenuRef, () => { NavActions.closeGeneralMenu() })

    useEffect(() => {

        if (collectionsMenu) {
            setArtigosItens(mapMenus(collectionsMenu))
        }


        if (colorsMenu) {
            setCoresItens(mapMenus(colorsMenu))
        }

    }, [collectionsMenu, colorsMenu])



    return (
        <div
            ref={generalMenuRef}
            id="general-menu"
            className={`${renderClassNames(
                GeneralMenuContainer(showFixedOffers, collectionsMenuOpen)
            )} ${generalMenuIsOpen
                ?
                renderClassNames(GeneralMenuContainerOpen)
                :
                renderClassNames(GeneralMenuContainerClose)
                }`}
        >
            {
                (artigosItens && colorsMenu) && <GeneralMenuSection
                    title="Shop"
                    sections={[
                        {
                            isSubSection: true,
                            title: "Artigos",
                            itens: artigosItens
                        },
                        {
                            isSubSection: true,
                            title: "Palheta de Cor",
                            itens: coresItens
                        }
                    ]}
                />
            }
            <GeneralMenuSection
                title="Arquivo"
                sections={[
                    {
                        itens: [
                            {
                                title: 'Lookbooks',
                                path: '/lookbooks'
                            },
                            {
                                title: 'Ajuda',
                                path: '/help'
                            },
                            {
                                title: 'Contato',
                                path: '/contact'
                            }
                        ]
                    }
                ]}
            />
        </div>

    )
}

export { GeneralMenu }