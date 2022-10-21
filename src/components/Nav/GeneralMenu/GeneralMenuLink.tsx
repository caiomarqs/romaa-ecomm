import Link, { LinkProps } from "next/link"
import { renderClassNames } from "../../../theme"
import { generalMenuLink } from "../styles"

type GeneralMenuLinkProps = {
    path: string
    title: string
}

const GeneralMenuLink = ({ path, title }: GeneralMenuLinkProps) => {
    return (
        <Link href={path}>
            <span className={renderClassNames(generalMenuLink)}>
                {title}
            </span>
        </Link>
    )
}

export {
    GeneralMenuLink,
    type GeneralMenuLinkProps
}