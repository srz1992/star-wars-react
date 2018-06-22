import React, { Component } from 'react';
import './Header.css'
import {Link} from 'react-router-dom';


class Header extends Component {
  
    render() {
        return(
    <header className="App-header">
    <h1 className="App-title">SWAPI Planets</h1>
    <ul>
        <li class="navlink"><Link to ='/planet'>Planets</Link> </li>
        <li class="navlink"> <Link to ='/ships'> Ships </Link> </li>
        <li class="navlink"><Link to='/people'> People</Link> </li>
    </ul>
  </header>
    )
}
}

export default Header;
