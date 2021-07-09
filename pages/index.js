import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import { Layout, MyScrollbar } from '../components';

export default function App() {
  return (
    <Router>
      <div>
        {/* <MyScrollbar /> */}
        <Layout>
          <Switch>
            <Route path="/about">
              <h2>About</h2>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}
