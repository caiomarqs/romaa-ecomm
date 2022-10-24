import { createElement, DOMAttributes, HTMLAttributes, ReactElement, useEffect, useState } from "react"

import Link from "next/link"

import { renderClassNames, TailWindClassType } from "../../theme"
import { IconAtButton, OutlineLargeBaseButtonStyles, OutlineSquareBaseButtonStyles } from "./styles"
import { render } from "react-dom"

interface OutlineBaseButtonProps
    extends
    DOMAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement> {
    path?: string,
    isetColors?: {
        backgroundColor: string,
        color: string
    }
    activeColors?: {
        backgroundColor: string,
        color: string
    },
    type?: 'select' | 'click' | 'hover',
    sizeButton?: 'large' | 'square',
    buttonDisable?: {
        disable: boolean,
        disableWarningAction?: () => any
    },
    buttonActive?: boolean,
    icon?: {
        component: (
            { }: React.ComponentProps<'svg'> & { title?: string; titleId?: string; }
        ) => JSX.Element,
        color?: string,
        bold?: boolean,
        rigth?: boolean
    }
}

const OutlineBaseButton = ({
    path,
    isetColors = {
        backgroundColor: 'transparent',
        color: '#52525b'
    },
    activeColors = {
        backgroundColor: '#cc3542',
        color: '#fff'
    },
    type = 'hover',
    sizeButton = 'large',
    buttonDisable,
    buttonActive,
    icon,
    ...props
}: OutlineBaseButtonProps) => {

    const isetStyle = { ...isetColors }

    const activeStyle = { ...activeColors }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        color: '#a1a1aa'
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

    }, [buttonActive, buttonDisable?.disable, props.children])


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

    const renderButtonContent = () => {
        let child;

        const renderWithIcon = icon?.component

        if (renderWithIcon) {
            const Icon = icon?.component

            const renderIcon = () => <Icon
                className={renderClassNames(IconAtButton(icon?.rigth))}
                style={icon.bold ? { strokeWidth: 1, stroke: buttonStyle.color } : {}}
            />

            child = (
                <>
                    {!icon.rigth ? renderIcon() : <></>}
                    {props.children}
                    {icon.rigth ? renderIcon() : <></>}
                </>
            )
        }

        if (!renderWithIcon) {
            child = props.children
        }

        return (
            <span
                {...isHoverOrSelect()}
                {...isClick}
                {...props}
                className={renderClassNames(actualClassNames())}
                style={buttonStyle}
                {...isDisable}
            >
                {child}
            </span>
        )
    }

    return (
        path
            ?
            <Link href={path} >{renderButtonContent()}</Link>
            :
            renderButtonContent()
    )
}

export { OutlineBaseButton }