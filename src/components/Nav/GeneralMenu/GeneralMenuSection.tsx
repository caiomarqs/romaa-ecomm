import { renderClassNames } from "../../../theme"

import { generalMenuSectionTitle, generalMenuItensContainer, generalMenuSectionContainer, generalMenuSubTitle } from "../styles"

import { GeneralMenuLink } from "./GeneralMenuLink"

type SubsectionItensType = {
    title: string,
    path: string
}

type SectionType = {
    isSubSection?: boolean,
    title?: string,
    itens: Array<SubsectionItensType>
}

type GeneralMenuSectionProps = {
    title: string,
    sections: Array<SectionType>
}

const GeneralMenuSection = ({ title, sections }: GeneralMenuSectionProps) => {

    const renderItens = (itens: Array<SubsectionItensType>) => (
        <div className={renderClassNames(generalMenuItensContainer)}>
            {
                itens.map((item, i: number) => (
                    <GeneralMenuLink
                        key={item.title + i}
                        path={item.path}
                        title={item.title}
                    />
                ))
            }
        </div>
    )

    const renderSection = (section: SectionType, isFirstSection: boolean, isLastSection: boolean, i: number) => (
        <div
            key={section.title ?? "" + i}
            className={renderClassNames(
                generalMenuSectionContainer(isFirstSection, isLastSection)
            )}
        >
            <h4 className={renderClassNames(generalMenuSubTitle)}>
                {section.title}
            </h4>
            {
                renderItens(section.itens)
            }
        </div>
    )

    const renderSections = (sections: Array<SectionType>) => {
        const lastSectionIndex = sections.length - 1

        return sections.map((section, i: number) => section.isSubSection
            ? renderSection(
                section,
                i === 0,
                i === lastSectionIndex,
                i
            )
            : renderItens(section.itens)
        )
    }

    return (
        <div>
            <h4 className={renderClassNames(generalMenuSectionTitle)}>
                {title}
            </h4>
            {renderSections(sections)}
        </div>
    )
}

export { GeneralMenuSection }