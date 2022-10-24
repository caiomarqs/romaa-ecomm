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

    const disable = !variant.availableForSale

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