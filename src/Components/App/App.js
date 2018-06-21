import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import PlanetList from '../PlanetList/PlanetList'

class App extends Component {
  
  // this is similar to jquery's onReady. It is called by
  // react when the component is loaded and ready to go
  
  

  
  
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
  
  // getPlanets(nextUrl){
  //   if (nextUrl != null){
  //     axios.get(nextUrl).then((response)=>{
  //       this.setState({planetList: 
  //         [...this.state.planetList, ...response.data.results]
  //       })
  //       this.getPlanets(response.data.next);
  //     }).catch((error)=>{
  //       console.log('error getting planets:', error);
  //     })  
  //   }
    
  // }

  


  render() {
    
    return (
      <div className="App">
       <Header />
        
        <PlanetList/>

      </div>
    );
  }
}

export default App;
