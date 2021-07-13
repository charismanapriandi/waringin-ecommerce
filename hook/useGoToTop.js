const useGoToTop = () => {
    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return toTop
}

export default useGoToTop