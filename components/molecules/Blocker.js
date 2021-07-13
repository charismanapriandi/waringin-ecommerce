import useScrollBody from "../../hook/useScrollBody"

const Blocker = ({ status, ...rest }) => {
    return (
        <div
            // onClick={() => setStatus(!status)} {}
            { ...rest }
            className={`${status ? 'pointer-events-auto opacity-20' : 'pointer-events-none opacity-0'} bg-black fixed p-10 top-0 left-0 h-screen w-full transition-all duration-300 cursor-pointer z-40`} />
    )
}

export default Blocker