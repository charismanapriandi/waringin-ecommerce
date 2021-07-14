// *
// **
// to controll scrolling page
// using with tailwindcss

const useScrollBody = () => {
    const body = document.querySelector('body')

    const scrollOn = () => {
        return body.classList.remove('overflow-hidden')
    }
    const scrollOff = () => {
        return body.classList.add('overflow-hidden')
    }

    return {scrollOn, scrollOff}
}

export default useScrollBody