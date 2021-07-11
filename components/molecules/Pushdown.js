const Pushdown = ({ children, status, setStatus }) => {
    return (
        <div className={`${status ? "h-52 opacity-100 overflow-y-auto" : "h-0 opacity-0"} px-2 overflow-hidden bg-background-900 rounded-xl my-1 transition-all duration-300`}>
            {children}
        </div>
    )
}

export default Pushdown