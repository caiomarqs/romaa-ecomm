import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"
import { renderClassNames } from "../../theme"
import { fixedOffersContainer, fixedOffersTitles } from "./styles"

type FixedOffersProps = {
    fixedOffers: Array<string> | any
}

const FixedOffers = ({ fixedOffers }: FixedOffersProps) => {

    const [showFixedOffers, setShowFixedOffers] = useState(true)

    const [offersShow, setOffersShow] = useState<number>(0)

    useEffect(() => {
        let interval = setInterval(() => { }, 0);

        if (fixedOffers?.length > 0) {
            interval = setInterval(() => {
                const limitToChange = fixedOffers.length - 1

                if (offersShow === limitToChange) {
                    setOffersShow(0)
                    return
                }

                setOffersShow(offersShow + 1)
            }, 5000)
        }

        return () => clearInterval(interval);
    }, [offersShow])

    return (
        fixedOffers?.length > 0
            ?
            <Transition
                show={showFixedOffers}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
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
                            fixedOffers.map((fixedOffer: string, i: number) => (
                                <Transition
                                    show={offersShow === i}
                                    enter="duration-200"
                                    enterFrom="opacity-0 scale-0 hidden"
                                    enterTo="opacity-100 scale-100 block"
                                    leave="duration-200"
                                    leaveFrom="opacity-100 scale-100 block"
                                    leaveTo="opacity-0 scale-0 hidden"
                                    key={fixedOffer + i}
                                >
                                    <span
                                        className={`text-sm`}
                                    >
                                        {fixedOffer}
                                    </span>
                                </Transition>

                            ))
                        }
                    </div>
                    <div onClick={() => setShowFixedOffers(false)}>
                        <span className="text-sm cursor-pointer">Fechar</span>
                    </div>
                </div>
            </Transition>
            :
            <></>
    )
}

export { FixedOffers }