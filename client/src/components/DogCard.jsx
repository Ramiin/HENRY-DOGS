import React, { Component } from 'react';

export default class DogCard extends Component{
    render(){
        return (
            <div className='card'>
                {this.props.dog.onDb ? <img src={this.props.dog.image} alt="" className='card-image'/> : <img src={this.props.dog.image.url} alt="" className='card-image'/> }
                <h3 className='card-title'>{this.props.dog.name}</h3>
                <p className='card-info-temps'>{this.props.dog.temperament}</p>
                <p className='card-info-weight'>{this.props.dog.weight + 'KGS'} </p>
            </div>
        )
    }
}