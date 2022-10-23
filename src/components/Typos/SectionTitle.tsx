import { DetailedHTMLProps, HTMLAttributes } from "react"
import { renderClassNames } from "../../theme"

import { SectionTitleType } from "./styles"

type SectionTitleProps = {
    children: string
    className?: string,
    elementProps?: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
}

const SectionTitle = ({ children, className, elementProps }: SectionTitleProps) => (
    <h1
        className={`${renderClassNames(SectionTitleType)} ${className ?? ''}`}
        {...elementProps}
    >
        {children}
    </h1>
)

export { SectionTitle }