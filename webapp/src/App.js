import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from "./components/Footer"



function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navigation/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
