import Blocker from "./Blocker"

const DropdownRight = ({ children, status, setStatus }) => {
    return (
        <>  
            <Blocker 
                status={status}
                onClick={() => setStatus(!status)}/>
            <div className={`${status ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'} absolute right-0 top-12 shadow-lg w-64 origin-top-right transform transition-all duration-300 bg-background-800 p-4 rounded-xl z-50`}>
                { children }
            </div>
        </>
    )
}

export default DropdownRight