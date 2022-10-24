import { VariantButton } from "./VariantButton"

type VariantsContainerProps = {
    variants: any,
    selectedVariant: string,
    onClickVariant: (title: string) => any
}

const VariantsContainer = ({
    variants,
    selectedVariant,
    onClickVariant
}: VariantsContainerProps) => {

    const selectVariant = (title: string) => {

        if (title === selectedVariant && selectedVariant !== '') {
            return onClickVariant('')
        }

        return onClickVariant(title)
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