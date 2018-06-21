import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  
  // this is similar to jquery's onReady. It is called by
  // react when the component is loaded and ready to go
  
  constructor (props){
    super(props);
    this.state = 
    { planetList: []};
  }

  componentDidMount(){
    console.log('component did mount');
    const url = 'https:swapi.co/api/planets/?format=json';
    this.getPlanets(url);    
  }
  
  // getPlanets(){
  //   const url = 'https:swapi.co/api/planets/?format=json';
  //   axios.get(url)
  //     .then((response)=>{
  //       console.log('back from the API with planets:', response.data);
  //       this.setState({planetList: response.data.results});
  //       let nextUrl = response.data.next;

  //       if(nextUrl != null){
  //         this.getMorePlanets(nextUrl)
  //       }
        
  //     }).catch((error)=>{
  //       console.log('error getting planets:', error);
  //     });
  // }
  
  getPlanets(nextUrl){
    if (nextUrl != null){
      axios.get(nextUrl).then((response)=>{
        this.setState({planetList: 
          [...this.state.planetList, ...response.data.results]
        })
        this.getPlanets(response.data.next);
      }).catch((error)=>{
        console.log('error getting planets:', error);
      })  
    }
    
  }


  render() {
    console.log('planets:', this.state.planetList);
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI Planets</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         
        </p>
        <ul>
              {this.state.planetList.map(planet => <li key={planet.name}>{planet.name} has a diameter of {planet.diameter}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
