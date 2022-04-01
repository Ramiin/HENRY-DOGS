import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return (
            <div>
                <NavLink to = '/home' > Inicio </NavLink>
                <NavLink to = '/details' > Detalles de raza </NavLink>
                <NavLink to = '/create' > Agregar raza </NavLink>
            </div>
        )
    }
}