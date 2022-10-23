import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useClickOutSideRef } from "../../hooks"
import { renderClassNames } from "../../theme"
import { TooltipContainer, TooltipSpan } from "./styles"

type SoldOutTipProps = {
    open: boolean,
    onClose: () => any
}


const SoldOutTip = ({ open, onClose }: SoldOutTipProps) => {

    const toolTipRef = useRef(null)

    const [vibrate, setVibrate] = useState(false)

    useClickOutSideRef(toolTipRef, onClose)

    useEffect(() => {
        setVibrate(true)
        const interval = setInterval(() => setVibrate(false), 300)

        return () => {
            clearInterval(interval)
        }
    }, [open, toolTipRef])

    return (
        open ?
            <div
                ref={toolTipRef}
                className={renderClassNames(TooltipContainer(vibrate))}
            >
                <span
                    className={renderClassNames(TooltipSpan)}>Tamanho indisponivel</span>
            </div>
            :
            <></>
    )
}


export { SoldOutTip }