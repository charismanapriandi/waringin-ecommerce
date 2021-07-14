import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <div suppressHydrationWarning className="bg-background-900 min-h-screen text-text-800 text-sm sm:text-base">
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    </Provider>
  )
   
}

export default MyApp
