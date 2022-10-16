import { ReactNode } from "react"
import { renderClassNames } from "../../theme"

import { pageContainerStyles } from "./styles"

type PageContainerProps = {
    children: ReactNode | JSX.Element
}

const PageContainer = ({ ...props }: PageContainerProps) => {
    return (
        <div className={renderClassNames(pageContainerStyles)}>
            {
                props.children
            }
        </div>
    )
}

export {
    PageContainer
}