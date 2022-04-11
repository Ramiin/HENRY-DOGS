import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return (
            <React.Fragment>
            <div className="nav">
            <ul>
              <li><NavLink to = '/home' > INICIO </NavLink></li>
              <li><NavLink to = '/create' > CREAR RAZA </NavLink></li>
              <li><NavLink to = '/about' >FAVORITOS</NavLink></li>
            </ul>
          </div>
          </React.Fragment>
        )
    }
}