import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Input = ({ label, placeholder, search, center, type='text', password, ...rest }) => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="relative">
            { label ? <label>{ label }</label> : null}
            { search 
            ? <div className="absolute top-1/2 transform -translate-y-1/2 pl-5 text-text-900">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            : null }
            <input 
                { ...rest } 
                type={password && isVisible && 'password' || type}
                placeholder={ placeholder }
                className={`${search ? 'pl-14 pr-5' : 'px-4'} ${center ? 'text-center' : '' } ${type === 'button' && 'cursor-pointer hover:ring ring-background-active'} bg-background-800 rounded-xl py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-background-active transition-all duration-300`} />
            {password && 
                <span
                    onClick={() => setIsVisible(!isVisible)} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer p-2">
                    {isVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </span>
            }
        </div>
    )
}

export default Input