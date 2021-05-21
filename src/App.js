import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import About from './pages/About'
// import Footer from './components/templates/Footer';
import Home from './pages/Home';
// import Icare from './pages/Icare';
// import IfgfKids from './pages/IfgfKids';
// import IfgfYouth from './pages/IfgfYouth';

//Admin
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/admin">
          </Route>
          <Route path="/">
            {/* <Navbar/> */}
          </Route>
      </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          {/* <Route path="/register">
            {!isLogin ? <Register /> : <Redirect to="/" />}
          </Route> */}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Switch>
            <Route path="/admin">
            </Route>
            <Route path="/">
              <Footer />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
