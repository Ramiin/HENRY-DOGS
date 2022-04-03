import React, { Component }from 'react';
import paw from './../sources/paw.png';

export default class Header extends Component{
    render(){
        return (
            <div id='header'>
                <h1>HENRY DOGS</h1> <img id= 'paw' src= {paw}></img>
            </div>
        )
    }
}