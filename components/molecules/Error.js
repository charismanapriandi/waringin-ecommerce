const Error = ({ children }) => {
    return (
        <div className="py-1 mb-2 px-4 bg-red-600 bg-opacity-20 text-red-600 rounded-xl">
            { children }
        </div>
    )
}

export default Error