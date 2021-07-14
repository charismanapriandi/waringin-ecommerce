import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const CheckBox = ({ children, label, name, active, ...rest }) => {

    return (
        <label className="flex items-center my-2" htmlFor={`filter-${label}`}>
            {/* <div 
                className={`${active ? 'bg-background-active bg-opacity-100' : 'bg-opacity-0'} w-6 h-6 rounded-lg border-2 border-background-800 relative transition-all duration-300`}>
                    <span className={`${active ? "opacity-100 scale-100" : "opacity-0 scale-50"} absolute -top-1 -right-1 transition-all duration-300 transform`}>
                        <svg width="24" height="24" fill="white" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
                    </span>
            </div> */}
            <input 
                className="c-checkbox" 
                type="checkbox" 
                id={`filter-${label}`} 
                { ...rest }
                />
            <span className="ml-4">{ children }</span>
        </label>
    )
}

export default CheckBox