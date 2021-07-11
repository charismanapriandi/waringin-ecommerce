import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import { Layout, MyScrollbar } from '../components';
import Cart from '../views/Cart';
import Wishlist from '../views/Wishlist';
import { useEffect } from 'react';
import { getAllCart, getAllCategory, getAllProduct } from '../store/actions/memoryAction';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  
  // save all data to memory 
  useEffect(() => {
    dispatch(getAllProduct())
    dispatch(getAllCategory())
    dispatch(getAllCart())
  }, [])
  
  return (
    <Router>
      <div>
        {/* <MyScrollbar /> */}
        <Layout>
          <Switch>
            {/* <Route path="/about">
              <h2>About</h2>
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}
