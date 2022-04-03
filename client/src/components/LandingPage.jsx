import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component{
    render(){
        return (
        <div id="landing-page">
            <div id="welcome-container">
                
                    <h1>HENRY DOGS</h1>
                    <Link id='landing-button' to ='/home'>Click me,  woooof!</Link>
                
            </div>

 
        </div>
        )
    }
}