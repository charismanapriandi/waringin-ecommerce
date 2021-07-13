import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import { Layout, MyScrollbar, ScrollBar } from '../components';
import Cart from '../views/Cart';
import Wishlist from '../views/Wishlist';
import { useEffect } from 'react';
import { getAllCart, getAllCategory, getAllProduct, getAllWishlist } from '../store/actions/memoryAction';
import { useDispatch } from 'react-redux';
import useDevice from '../hook/useDevice';
import { closeFilter, openFilter } from '../store/actions/statusAction';
import Profile from '../views/Profile';

export default function App() {
  const dispatch = useDispatch()
  const device = useDevice()
  // save all data to memory 
  useEffect(() => {
    dispatch(getAllProduct())
    dispatch(getAllCategory())
    dispatch(getAllCart())
    dispatch(getAllWishlist())
  }, [dispatch])

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      dispatch(closeFilter())
    } else {
      dispatch(openFilter())
    }
  }, [])

  return (
    <Router>
      <div>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Layout>
      </div>
    </Router>
  )
}
