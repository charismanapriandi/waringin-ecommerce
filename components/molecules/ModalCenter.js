import { Blocker } from "."

const ModalCenter = ({ children, status, setStatus }) => {
    return (
        <>
        <Blocker 
            onClick={() => setStatus(false)}
            status={status} />
        <div className={`${status ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-50'} w-64 z-50 bg-background-800 absolute top-1/2 left-1/2 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl`}>
            { children }
        </div>
        </>
    )
}

export default ModalCenter