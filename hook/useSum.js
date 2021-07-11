const useSum = (value) => {
    const result = value.reduce((a, b) => {
        return a + b;
    }, 0)

    return result
}

export default useSum