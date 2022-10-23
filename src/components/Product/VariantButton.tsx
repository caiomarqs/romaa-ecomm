import { Key, MouseEventHandler, useState } from "react"

import { OutlineBaseButton } from "../Buttons"

import { SoldOutTip } from "./SoldOutTip"

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
        borderColor: '#a1a1aa',
        color: '#a1a1aa'
    }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        borderColor: '#d4d4d8',
        color: '#d4d4d8'
    }

    const disable = !variant.availableForSale

    const [buttonStyles, setButtonStyles] = useState(disable ? disableStyle : insetStyle)

    const [warningAction, setWaringAction] = useState(false)

    return (
        <>
            <div
                className={`${!isLastVariant ? 'mr-4' : ''}`}
            >
                <OutlineBaseButton
                    key={variant.title}
                    onClick={onClick}
                    type="select"
                    sizeButton="square"
                    buttonDisable={{
                        disable,
                        disableWarningAction: () => setWaringAction(true)
                    }}
                    buttonActive={isActive}
                >
                    {variant.title}
                </OutlineBaseButton>
                {
                    disable
                    &&
                    <SoldOutTip
                        open={warningAction}
                        onClose={() => { setWaringAction(false) }}
                    />
                } 
            </div>
        </>
    )
}

export { VariantButton }