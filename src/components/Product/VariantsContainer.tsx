import { useState } from "react"

import { VariantButton } from "./VariantButton"

type VariantsContainerProps = {
    variants: any
}

const VariantsContainer = ({ variants }: VariantsContainerProps) => {

    const [selectedVariant, setSelectVariant] = useState('')

    const selectVariant = (title: string) => {

        if(title === selectedVariant && selectedVariant !== '') {
            return setSelectVariant('')
        }

        return setSelectVariant(title)
    }

    const renderVariant = (variant: any, i: number) => {

        const isLastVariant = (variants.length - 1) === i

        return (
            <VariantButton
                key={variant.title + i} 
                variant={variant} 
                isLastVariant={isLastVariant}
                isActive={variant.title === selectedVariant}
                onClick={() => selectVariant(variant.title)}
            />
        )
    }

    return (
        <div className="flex">
            {
                variants.map(renderVariant)
            }
        </div>
    )
}

export { VariantsContainer }