import { Popover } from "@headlessui/react"
import { Key, MouseEventHandler, useEffect, useState } from "react"
import { renderClassNames } from "../../theme"
import { SoldOutTip } from "./SoldOutTip"

import { VariantSpanStyle, TooltipSpan, TooltipContainer } from "./styles"

type VariantButtonProps = {
    isLastVariant: boolean,
    variant: any,
    key: Key,
    isActive: boolean,
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const VariantButton = ({
    isLastVariant,
    variant,
    isActive,
    onClick
}: VariantButtonProps) => {

    const selectedStyle = {
        backgroundColor: '#cc3542',
        borderColor: '#cc3542',
        color: '#fff'
    }

    const insetStyle = {
        backgroundColor: 'transparent',
        borderColor: '#52525b',
        color: '#52525b'
    }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        borderColor: '#d4d4d8',
        color: '#d4d4d8'
    }

    const disable = !variant.availableForSale

    const [buttonStyles, setButtonStyles] = useState(disable ? disableStyle : insetStyle)

    const [buttonClick, setButtonClick] = useState(false)

    useEffect(() => {

        if (!isActive && !disable) {
            setButtonStyles(insetStyle)
        }

    }, [isActive])


    const onMouseOver = () => {
        setButtonStyles(selectedStyle)
    }

    const onMouseLeave = () => {
        setButtonStyles(insetStyle)
    }

    return (
        <>
            <div
                className={`outline-none ${!isLastVariant ? 'mr-4' : ''}`}
                onClick={disable ? () => setButtonClick(true) : onClick}
            >
                <span
                    key={variant.title}
                    className={renderClassNames(VariantSpanStyle)}
                    onMouseOver={(isActive || disable) ? () => { } : onMouseOver}
                    onMouseLeave={(isActive || disable) ? () => { } : onMouseLeave}
                    style={buttonStyles}
                >
                    {variant.title}
                </span>
                {
                    disable
                    &&
                    <SoldOutTip
                        open={buttonClick}
                        onClose={() => { setButtonClick(false) }}
                    />
                }
            </div>
        </>
    )
}

export { VariantButton }