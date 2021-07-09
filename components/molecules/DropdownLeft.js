const DropdownLeft = ({ children, status, setStatus }) => {
    return (
        <>  
            <div
                onClick={() => setStatus(!status)} 
                className={`${status ? 'pointer-events-auto opacity-20' : 'pointer-events-none opacity-0'} bg-black fixed p-10 top-0 left-0 h-screen w-full transition-all duration-300`} />
            <div className={`${status ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'} absolute right-0 top-14 shadow-lg w-64 z-30 origin-top-right transform transition-all duration-300 bg-background-800 p-4 rounded-xl`}>
                { children }
            </div>
        </>
    )
}

export default DropdownLeft