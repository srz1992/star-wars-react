import React, { Component } from 'react';
import axios from 'axios'
import Planet from '../Planet/Planet'

class PlanetList extends Component {
  
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

      async getPlanets(url){
        let nextUrl = url;
        while (nextUrl != null){
          await axios.get(nextUrl)
          .then((response)=>{
            this.setState({planetList: 
              [...this.state.planetList, ...response.data.results]
            })
            nextUrl = response.data.next;
            // this.getPlanets(response.data.next);
          }).catch((error)=>{
            console.log('error getting planets:', error);
            nextUrl = null;
          })  
        }}

    render() {
        console.log('planets:', this.state.planetList);
        return(


        <ul>
            {this.state.planetList.map(item => <Planet planet={item} key={item.name}/>)}
        </ul>
    
)
}
}

export default PlanetList;
