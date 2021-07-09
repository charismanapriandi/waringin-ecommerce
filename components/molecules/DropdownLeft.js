import Blocker from "./Blocker"

const DropdownLeft = ({ children, status, setStatus }) => {
    return (
        <>  
            <Blocker
                status={status}
                onClick={() => setStatus(!status)}/>
            <div className={`${status ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'} absolute left-0 top-12 shadow-lg w-64 z-50 origin-top-left transform transition-all duration-300 bg-background-800 p-4 rounded-xl`}>
                { children }
            </div>
        </>
    )
}

export default DropdownLeft