import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllDogs} from '../redux/actions'


class DogCard extends Component{
    render(){
        return (
            <React.Fragment>

               	
               
            {this.props.dog.error ? 
            
            (<div className='card'>
                                 {<img src='data:image/png;base64,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' alt="" className='card-image'/>}
                <h3 className='card-title'>No se encontraron coincidencias.</h3><br />
                <p className='card-info-weight'><Link to ='./home'><button className = 'back-button' onClick={()=>{this.props.getAllDogs()}}>Regresar</button></Link> </p>
            </div>) 
            : 
            (<Link to={'./details/'+this.props.dog.id}><div className='card'>
                                 {<img src={this.props.dog.image} alt="" className='card-image'/>}
                <h3 className='card-title'>{this.props.dog.name}</h3>
                <p className='card-info-temps'>{this.props.dog.temperament}</p>
                <p className='card-info-weight'>{this.props.dog.weight + ' KG'} </p>
            </div></Link>)}
            </React.Fragment>
        )
    }
}

export const mapDispatchToProps = { getAllDogs }

export default connect(null, mapDispatchToProps)(DogCard)