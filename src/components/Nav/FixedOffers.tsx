import { Transition } from "@headlessui/react"
import { useState } from "react"
import { renderClassNames } from "../../theme"
import { fixedOffersContainer, fixedOffersTitles } from "./styles"

type FixedOffersProps = {
    fixedOffers: Array<string> | any
}

const FixedOffers = ({ fixedOffers }: FixedOffersProps) => {

    const [showFixedOffers, setShowFixedOffers] = useState(true)

    return (
        fixedOffers?.length > 0
            ?
            <Transition
                show={showFixedOffers}
            >
                <div
                    className={
                        renderClassNames(fixedOffersContainer)
                    }
                >
                    <div
                        className={
                            renderClassNames(fixedOffersTitles)
                        }
                    >
                        {
                            fixedOffers.map((fixedOffer: string) => (
                                <span>{fixedOffer}</span>
                            ))
                        }
                    </div>
                    <div>close</div>
                </div>
            </Transition>
            :
            <></>
    )
}

export { FixedOffers }