const Button = ({ children, active, danger, ...rest }) => {
    return(
        <button { ...rest } 
            className={`${active ? 'bg-background-active hover:bg-background-800 hover:ring hover:ring-background-active focus:bg-background-800' : 'hover:bg-background-active'} ${danger ? "bg-red-500 hover:bg-red-600 focus:ring-red-600 focus:bg-background-800" : ""} bg-background-800 rounded-xl py-2 px-4 w-full focus:ring-2 focus:ring-background-active transition-all duration-300`}>
            { children }
        </button>
    )
}

export default Button