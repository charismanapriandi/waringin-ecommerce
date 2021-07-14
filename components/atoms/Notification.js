import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Notification = ({ status, setStatus, children }) => {
    return (
        <div className={`${status ? "top-5 opacity-100 pointer-events-auto" : " top-0 opacity-0 pointer-events-none"} fixed left-5 lg:left-1/2 lg:w-96 right-5 lg:right-auto bg-background-active bg-opacity-80 text-text-active z-50 px-4 py-2 rounded-xl transition-all duration-300 lg:transform lg:-translate-x-1/2`}>
            { children }
            <div
                onClick={() => setStatus(false)} 
                className="absolute top-2 right-2">
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    )
}

export default Notification