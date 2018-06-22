import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PlanetList from '../PlanetList/PlanetList';
import Ships from '../Ships/Ships';
import People from '../People/People';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  
  


  render() {
    
    return (
      <Router>
      <div className="App">
        <Header />
        {/* <PlanetList/> */}
      <Route exact path='/' component={Home} />
      <Route path='/planet' component={PlanetList} />
      <Route path='/ships' component={Ships} />
      <Route path='/people' component={People}/>

      </div>
      </Router>
    );
  }
}

export default App;
