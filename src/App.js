import logo from './logo.svg';
import './App.css';
import './developer.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

//Pages 
import HomePage from './pages/home';
import NotFoundPage from './pages/404';
import IcarePage from './pages/icare';
import IfgfYouthPage from './pages/ifgf-youth';
import IfgfKidsPage from './pages/ifgf-kids';

//Template
import FooterTemplate from './template/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/icare" component={IcarePage} />
          <Route exact path="/iyouth" component={IfgfYouthPage} />
          <Route exact path="/ikid" component={IfgfKidsPage} />
          <Route exact path="/404" component= {NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      <FooterTemplate></FooterTemplate>
    </div>
  );
}

export default App;
