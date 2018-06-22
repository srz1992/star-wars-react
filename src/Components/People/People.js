import React, { Component } from 'react';
import axios from 'axios';

class People extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            peopleList: []
        };
    }

    componentDidMount(){
        console.log('ships.js did mount');
        const url = 'https:swapi.co/api/people/?format=json'
        this.getPeople(url);
    }

    async getPeople(url){
        let nextUrl = url;
        while(nextUrl != null) {
            await axios.get(nextUrl)
            .then((response)=>{
                this.setState(
                    { 
                        peopleList: [...this.state.peopleList, ...response.data.results]
                    })
                    nextUrl = response.data.next;
            }).catch((error)=>{
                console.log('error getting ships:', error);
                nextUrl = null;                
            })
        }
    }

    render() {
        console.log('people:', this.state.peopleList);

        return(
            
            <div>
            <h2>People</h2>
            <ul>
                {this.state.peopleList.map(item => <li key={item.name}>{item.name} has a mass of {item.mass}</li>)}
            </ul>
            </div>

    )
}
}

export default People;
