import { Dialog, Transition } from "@headlessui/react"
import { title } from "process"
import { Fragment, useContext, useEffect, useState } from "react"
import { NavActions } from "../../../actions"
import { NavContext } from "../../../context"
import { renderClassNames } from "../../../theme"
import { GeneralMenuContainer, GeneralMenuContainerClose, GeneralMenuContainerOpen } from "../styles"
import { GeneralMenuSection } from "./GeneralMenuSection"

const GeneralMenu = () => {

    const { navState } = useContext(NavContext)
    const { generalMenuIsOpen } = navState

    return (
        <div
            id="general-menu"
            className={`${renderClassNames(GeneralMenuContainer)} ${generalMenuIsOpen
                ?
                renderClassNames(GeneralMenuContainerOpen)
                :
                renderClassNames(GeneralMenuContainerClose)
                }`}

        >
            <GeneralMenuSection
                title="Shop"
                sections={[
                    {
                        isSubSection: true,
                        title: "Artigos",
                        itens: [{
                            title: "Camisetas",
                            path: "/collections/camisetas"
                        },
                        {
                            title: "Moletons",
                            path: "/collections/moletons"
                        }
                        ]
                    },
                    {
                        isSubSection: true,
                        title: "Palheta de Cor",
                        itens: [
                            {
                                title: 'Preto',
                                path: '/collections/pretos'
                            },
                            {
                                title: 'Creme',
                                path: '/collections/pretos'
                            },
                            {
                                title: 'Branco',
                                path: '/collections/pretos'
                            }
                        ]
                    }
                ]}
            />
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