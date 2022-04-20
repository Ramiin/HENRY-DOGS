import React, {Component} from 'react';
import { connect } from 'react-redux';
import DogCard from './DogCard';

class Favorites extends Component{
    render(){
        if(this.props.favorites?.length===0) return <div className='msform'>
        <div className="details">
 
    <div className="flex-center-container" style={{padding: '0px'}}><p>Aún no agregas ningún favorito.</p></div>

        </div>
    </div>;
       else return (
        <React.Fragment>

       
                <div className="ms-form">
        
            <div className="flex-center-container favs" style={{padding: '0px'}}><h1 className='fs-title' style={{marginBottom: '0px', marginTop: '15px'}}>Tus doggos favoritos. ​🐩​​❤️️️​</h1></div>

                </div>
        

        
        <div className="cards-container"> 
       
        {this.props.favorites.map((el, i) => <DogCard dog = {el} key ={i}/>)}

       
        
        </div>
        </React.Fragment>
       )
    }
}

function mapStateToProps(state){
    const {favs} = state;
    return {favorites : favs}
}

export default connect(mapStateToProps)(Favorites)