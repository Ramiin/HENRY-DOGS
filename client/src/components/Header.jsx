import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

export default class Header extends Component{
    render(){
        return (
            <div id='header'>
                <div id='logo'>

                <Link to='/home'><h1>HENRY DOGS🐶💛</h1></Link>
                </div>
                <Nav />
            </div>
        )
    }
}