import { useState } from "react"

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

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
                    <div className="flex flex-row shrink my-8">
                        <VariantsContainer
                            variants={variants}
                        />
                        <QntdInput className="ml-4" />
                        <OutlineBaseButton
                            icon={{
                                component: MagnifyingGlassIcon,
                                bold: true
                            }}
                            className="ml-auto"
                        >Detalhes</OutlineBaseButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { OneHighlight }