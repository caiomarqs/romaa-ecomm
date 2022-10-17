import Link, { LinkProps } from "next/link"
import { renderClassNames } from "../../theme"
import { collectionMenuLink } from "./styles"

type ColectionMenuLinkProps = {
    linkProps: LinkProps
    collection: any
}

const ColectionMenuLink = ({ linkProps, collection }: ColectionMenuLinkProps) => {
    return (
        <Link {...linkProps}>
            <span className={renderClassNames(collectionMenuLink)}>
                {collection.title}
            </span>
        </Link>
    )
}

export {
    ColectionMenuLink,
    type ColectionMenuLinkProps
}