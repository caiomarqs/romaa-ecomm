import { DOMAttributes, HTMLAttributes, ReactElement, useEffect, useState } from "react"

import Link from "next/link"

import { renderClassNames, TailWindClassType } from "../../theme"
import { OutlineLargeBaseButtonStyles, OutlineSquareBaseButtonStyles } from "./styles"

interface OutlineBaseButtonProps
    extends
    DOMAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement> {
    path?: string,
    isetColors?: {
        backgroundColor: string,
        borderColor: string,
        color: string
    }
    activeColors?: {
        backgroundColor: string,
        borderColor: string,
        color: string
    },
    type?: 'select' | 'click' | 'hover',
    sizeButton?: 'large' | 'square',
    buttonDisable?: {
        disable: boolean,
        disableWarningAction?: () => any
    },
    buttonActive?: boolean
}

const OutlineBaseButton = ({
    path,
    isetColors = {
        backgroundColor: 'transparent',
        borderColor: '#a1a1aa',
        color: '#a1a1aa'
    },
    activeColors = {
        backgroundColor: '#cc3542',
        borderColor: '#cc3542',
        color: '#fff'
    },
    type = 'hover',
    sizeButton = 'large',
    buttonDisable,
    buttonActive,
    ...props
}: OutlineBaseButtonProps) => {


    const isetStyle = { ...isetColors }

    const activeStyle = { ...activeColors }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        borderColor: '#d4d4d8',
        color: '#d4d4d8'
    }

    const actualClassNames = (): TailWindClassType => {
        if (sizeButton === "large") {
            return OutlineLargeBaseButtonStyles(props.className ?? '')
        }

        if (sizeButton === "square") {
            return OutlineSquareBaseButtonStyles(props.className ?? '')
        }

        return ['']
    }

    const [buttonStyle, setButtonStyle] = useState(isetStyle)

    useEffect(() => {

        if (buttonDisable?.disable) {
            setButtonStyle(disableStyle)
        }

        if (buttonActive) {
            setButtonStyle(activeStyle)
        }

        if (!buttonActive && !buttonDisable?.disable) {
            setButtonStyle(isetStyle)
        }

    }, [buttonActive, buttonDisable?.disable])


    const onMouseOver = () => {
        setButtonStyle(activeStyle)
    }

    const onMouseLeave = () => {
        setButtonStyle(isetStyle)
    }

    const isHoverOrSelect = () => {
        if (buttonDisable?.disable) {
            return
        }

        if (buttonActive) {
            return
        }

        return (type === 'hover' || type === 'select') && {
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave
        }
    }

    const isDisable = buttonDisable?.disable && {
        onClick: buttonDisable?.disableWarningAction
    }

    const isClick = {
    }

    const renderButton = () => (
        <span
            {...isHoverOrSelect()}
            {...isClick}
            {...props}
            className={renderClassNames(actualClassNames())}
            style={buttonStyle}
            {...isDisable}
        >
            {props.children}
        </span>
    )

    return (
        path
            ?
            <Link href={path} >{renderButton()}</Link>
            :
            renderButton()
    )
}

export { OutlineBaseButton }