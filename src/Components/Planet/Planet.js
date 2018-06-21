import React, { Component } from 'react';

class Planet extends Component {
  
    render() {
        return(
            
            <li>{this.props.planet.name} has a diameter of {this.props.planet.diameter}</li>


    )
}
}

export default Planet;
