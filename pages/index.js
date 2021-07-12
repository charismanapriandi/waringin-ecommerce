import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import { Layout, MyScrollbar } from '../components';
import Cart from '../views/Cart';
import Wishlist from '../views/Wishlist';
import { useEffect } from 'react';
import { getAllCart, getAllCategory, getAllProduct, getAllWishlist } from '../store/actions/memoryAction';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  
  // save all data to memory 
  useEffect(() => {
    dispatch(getAllProduct())
    dispatch(getAllCategory())
    dispatch(getAllCart())
    dispatch(getAllWishlist())
  }, [dispatch])
  
  return (
    <Router>
      <div>
        {/* <MyScrollbar /> */}
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/wishlist" component={Wishlist} />
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}
