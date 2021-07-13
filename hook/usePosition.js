import { useEffect, useState } from "react"

const usePosition = () => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setPosition(window.pageYOffset)
        }
    
        window.addEventListener('scroll', onScroll)

    }, [position])

    return position
}

export default usePosition