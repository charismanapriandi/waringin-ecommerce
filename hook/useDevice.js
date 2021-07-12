import { useEffect, useState } from "react"

const useDevice = () => {
    const [width, setWidth] = useState()

    useEffect(() => {
        const updateSize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize)

        updateSize()
    }, [width]);

    return width
}

export default useDevice