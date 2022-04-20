import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDog }from '../redux/actions';

export default function Details(){

   
    let {id} = useParams();
    let dispatch = useDispatch();
    let history = useHistory();
  

    useEffect(()=>{
        dispatch(getDog(id));
    }, [dispatch, id])

    let dog = useSelector(state => state.dog)
    console.log(dog)
    if(dog.error){
        return (
            
            <div className='msform'>
                <div className="details">
         
            <div className="flex-center-container"><p>NO SE HA ENCONTRADO INFORMACIÓN ADICIONAL</p></div>

                </div>
            </div>
          
    )
    }
    return (
            <div className='flex-center-container'>
            <div className='msform'>
                <div className="details">
         
            {dog[0] ? (<React.Fragment>

               
                    <img src={dog[0].image} alt="doggie" />
                    <table style={{width:'80%'}}>
                    <tbody>
                    <tr>
                        <td style={{textAlign:'right', fontWeight:'bold'}}>Nombre:</td>
                        <td style={{textAlign:'left'}}>{dog[0].name}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right', fontWeight:'bold'}}>Peso:</td>
                        <td style={{textAlign:'left'}}>{dog[0].weight} KG</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right', fontWeight:'bold'}}>Altura:</td>
                        <td style={{textAlign:'left'}}>{dog[0].height} CM</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right', fontWeight:'bold'}}>Longevidad:</td>
                        <td style={{textAlign:'left'}}>{dog[0].life_span}</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right', fontWeight:'bold'}}>Temperamento:</td>
                        <td style={{textAlign:'left'}}>{dog[0].temperament}</td>
                    </tr>
                    
                    </tbody>
                    </table>

                    <br />
                    
            
                    <button className='back-button'onClick={() => history.goBack()}>Regresar</button>
                              

                </React.Fragment>) : <div className="flex-center-container"><span className="loader"></span></div>}

                </div>
            </div>

            </div>
          
    )
}