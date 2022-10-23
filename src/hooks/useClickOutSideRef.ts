import { useEffect } from "react"

const useClickOutSideRef = (ref: any, cb: () => any) => {
    useEffect(() => {

        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                cb()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        
    }, [ref])
}

export { useClickOutSideRef }