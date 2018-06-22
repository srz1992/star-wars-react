import React, { Component } from 'react';
import axios from 'axios';

class Ships extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            shipList: []
        };
    }

    componentDidMount(){
        console.log('ships.js did mount');
        const url = 'https:swapi.co/api/starships/?format=json'
        this.getShips(url);
    }

    async getShips(url){
        let nextUrl = url;
        while(nextUrl != null) {
            await axios.get(nextUrl)
            .then((response)=>{
                this.setState(
                    { 
                        shipList: [...this.state.shipList, ...response.data.results]
                    })
                    nextUrl = response.data.next;
            }).catch((error)=>{
                console.log('error getting ships:', error);
                nextUrl = null;                
            })
        }
    }

    render() {
        console.log('ships:', this.state.shipList);

        return(
            
            <div>
            <h2>Ships</h2>
            <ul>
                {this.state.shipList.map(item => <li key={item.name}>{item.name} costs {item.cost_in_credits} credits</li>)}
            </ul>
            </div>

    )
}
}

export default Ships;
