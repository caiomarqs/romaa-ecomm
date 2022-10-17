import { Transition } from "@headlessui/react"
import { renderClassNames } from "../../theme"
import { ColectionMenuLink } from "./CollectionMenuLink"
import { collectionsMenu } from "./styles"

type CollectionMenuProps = {
    show: boolean,
    collections: any
}

const CollectionMenu = ({ show, collections }: CollectionMenuProps) => {

    return (
        <Transition
            show={show}
            enter="transition ease-in duration-150"
            enterFrom="origin-bottom opacity-0 scale-y-0"
            enterTo="opacity-100 scale-y-100"
            leave="transition ease-out duration-150"
            leaveFrom="origin-top opacity-100 scale-y-100"
            leaveTo="opacity-0 scale-y-0"
        >
            <div className={renderClassNames(collectionsMenu)}>
                {
                    collections.map((collection: any) => (
                        <ColectionMenuLink
                            linkProps={{
                                href: `/collections/${collection.handle}`
                            }}
                            key={collection.id}
                            collection={collection}
                        />
                    ))
                }
            </div>
        </Transition>
    )
}

export { CollectionMenu }