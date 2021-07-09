import Scrollbar from 'smooth-scrollbar'

const MyScrollbar = ({ children }) => {
    const options = {
        damping: 0.1
    }

    Scrollbar.init(document.querySelector('#my-scrollbar'), options);

    return Scrollbar
}

export default MyScrollbar