import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Community from './pages/Community';
import Footer from "./components/Footer"
import Marketplace from "./pages/Marketplace"
import Login from "./pages/Login"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navigation/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/market" component={Marketplace} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
