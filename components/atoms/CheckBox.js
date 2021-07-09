import { useEffect, useState } from "react"

const CheckBox = ({ children, ...rest }) => {

    return (
        <label className="flex items-center my-2" htmlFor={`category-${children}`}>
            <div id={`check-${children}`} 
                className={` w-6 h-6 rounded-lg border-2 border-background-800`}/>
            <input 
                className="c-checkbox" 
                type="checkbox" 
                id={`category-${children}`} 
                { ...rest }
                />
            <span className="ml-4">{ children }</span>
        </label>
    )
}

export default CheckBox