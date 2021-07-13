// *
// **
// to controll scrolling page
// using with tailwindcss

const useScrollBody = () => {
    const body = document.querySelector('body')

    const scrollBody = () => {
        if (body.classList.contains('overflow-hidden')) {
            return body.classList.remove('overflow-hidden')
        } else {
            return body.classList.add('overflow-hidden')
        }
    }

    return scrollBody
}

export default useScrollBody