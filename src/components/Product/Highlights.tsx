import { OneHighlight } from "./OneHighlight"

type HighlightsProps = {
    highlights: any
}

const Highlights = ({ highlights }: HighlightsProps) => {

    return (
        highlights.length > 1
            ?
            <></>
            :
            <OneHighlight oneHighlight={highlights[0]} />
    )
}

export { Highlights }