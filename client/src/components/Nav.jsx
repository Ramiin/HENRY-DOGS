import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return (
            <div id='nav-bar'>
                <NavLink to = '/home' > Inicio </NavLink>

                <NavLink to = '/create' > Agregar raza </NavLink>
            </div>
        )
    }
}