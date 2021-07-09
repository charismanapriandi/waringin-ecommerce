const Button = ({ children, active, ...rest }) => {
    return(
        <button { ...rest } className={`${active ? 'bg-background-active hover:bg-background-800 hover:ring hover:ring-background-active focus:bg-background-800' : 'hover:bg-background-active'} bg-background-800 rounded-xl py-2 px-4 w-full focus:ring-2 focus:ring-background-active transition-all duration-300 `}>
            { children }
        </button>
    )
}

export default Button