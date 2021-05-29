import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/my.css'
import { useSelector } from 'react-redux';

import Navigation from './components/templates/Navigation'
import About from './pages/About'
import VisionMission from './pages/VisionMission';
import Pastor from './pages/Pastor';
import Footer from './components/templates/Footer';
import Home from './pages/Home';
import Icare from './pages/Icare';
import IfgfKids from './pages/IfgfKids';
import IfgfYouth from './pages/IfgfYouth';

//Admin
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage'
import PrayerMeetings from './pages/PrayerMeetings';

function App() {
  const isLogin = useSelector(state => state.auth.isLogged)

  return (
    <Router>
      <Switch>
          <Route path="/admin">
          </Route>
          <Route exact path="/">
          </Route>
          <Route path="/">
            <Navigation/>
          </Route>
      </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/dashboard">
            {/* {isLogin ? <DashboardPage /> : <Redirect to="/admin" />} */}
            <DashboardPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/visionmission">
            <VisionMission/>
          </Route>
          <Route path="/pastor">
            <Pastor/>
          </Route>
          <Route path="/icare">
            <Icare />
          </Route>
          <Route path="/ifgfkids">
            <IfgfKids />
          </Route>
          <Route path="/ifgfyouth">
            <IfgfYouth />
          </Route>
          <Route path="/prayermeetings">
            <PrayerMeetings/>
          </Route>
          <Route>
            {/* <PageNotFound /> */}
          </Route>
        </Switch>
        <Switch>
            <Route path="/admin">
            </Route>
            <Route path="/dashboard">
            </Route>
            <Route path="/">
              <Footer />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
