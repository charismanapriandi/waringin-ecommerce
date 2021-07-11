import { useEffect } from "react"

const Radio = ({ children, label, name, active, ...rest }) => {

    return (
        <label 
            htmlFor={`sorter-${label}`} 
            className={`${active ? 'bg-background-active hover:bg-background-800 hover:ring hover:ring-background-active' : 'bg-background-800 hover:bg-background-active'} block px-4 py-2 rounded-xl transition-all duration-300`}>
                <input 
                    { ...rest }
                    type="radio" 
                    id={`sorter-${label}`} 
                    name={name} 
                    className="c-radio"/>
                { children }
            </label>
    )
}

export default Radio