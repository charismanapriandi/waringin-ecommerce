import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Input = ({ label, placeholder, search, center, type='text', ...rest }) => {

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
                type={type}
                placeholder={ placeholder }
                className={`${search ? 'pl-14 pr-5' : 'px-4'} ${center ? 'text-center' : '' } bg-background-800 rounded-xl py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-background-active transition-all duration-300`} />
        </div>
    )
}

export default Input