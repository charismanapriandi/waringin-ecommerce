import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartFill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Button from "./Button"

const ButtonWishlist = () => {
    const [favorite, setFavorite] = useState(false)
    
    return (
        <div className="flex justify-center items-center">
            <Button onClick={() => setFavorite(!favorite)}>
                {favorite 
                    ? <span className="text-red-600"><FontAwesomeIcon icon={faHeartFill} /></span>
                    : <FontAwesomeIcon icon={faHeart} />
                }
            </Button>
        </div>
    )
}

export default ButtonWishlist