const Radio = ({ children, label, name }) => {
    return (
        <label htmlFor={label} className="block px-4 py-2 hover:bg-background-active rounded-xl transition-all duration-300">
                <input 
                    type="radio" 
                    id={label} 
                    name={name} 
                    className="c-radio" 
                    value="Merah"/>
                { children }
            </label>
    )
}

export default Radio