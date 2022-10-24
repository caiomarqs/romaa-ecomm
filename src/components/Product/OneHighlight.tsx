import { useState } from "react"

import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

import { renderClassNames } from "../../theme"
import { SectionTitle } from "../Typos"

import { VariantsContainer } from "./VariantsContainer"
import { OneHighlightContainer } from "./styles"
import { QntdInput } from "./QntdInput"
import { OutlineBaseButton } from "../Buttons"

type OneHighlightProps = {
    oneHighlight: any
}

const OneHighlight = ({ oneHighlight }: OneHighlightProps) => {

    const {
        title,
        handle,
        id,
        description,
        descriptionHtml,
        price,
        variants,
        images
    } = oneHighlight

    const [imgIndex, setImgIndex] = useState(0)

    const [selectedVariant, setSelectVariant] = useState('')

    const addCartOptions = {
        children: 'Comprar',
        isetColors: {
            backgroundColor: '#cc3542',
            color: '#fff'
        },
        activeColors: {
            backgroundColor: '#db6b75',
            color: '#fff'
        }
    }

    const detailsOptions = {
        children: 'Detalhes',
        isetColors: {
            backgroundColor: '#f4f4f5',
            color: '#52525b'
        },
    }

    const controlButton = () => {
        if (selectedVariant !== '') {
            return addCartOptions
        }

        return detailsOptions
    }

    return (
        <div className="py-16 px-6 sm:py-16 lg:px-6 mx-auto">
            <div className="flex">
                <div className="flex-1 p-16">
                    <div
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${images[imgIndex].url})`,
                        }}
                        className={renderClassNames(OneHighlightContainer)}
                        onMouseOver={_ => setImgIndex(imgIndex === 0 ? 1 : 0)}
                        onMouseLeave={_ => setImgIndex(imgIndex === 0 ? 1 : 0)}
                    />
                </div>
                <div className="flex-1 p-16 flex flex-col">
                    <SectionTitle className="mb-8">{title}</SectionTitle>
                    <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                    <div className="flex flex-row my-8">
                        <VariantsContainer
                            selectedVariant={selectedVariant}
                            onClickVariant={setSelectVariant}
                            variants={variants}
                        />
                        <QntdInput className="ml-4" />
                        <OutlineBaseButton
                            className="ml-auto"
                            {...controlButton()}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export { OneHighlight }