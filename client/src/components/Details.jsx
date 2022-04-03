import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDog }from '../redux/actions';

export default function Details(){

   
    let {id} = useParams();
    let dispatch = useDispatch();
  

    useEffect(()=>{
        dispatch(getDog(id));
    }, [dispatch, id])

    let dog = useSelector(state => state.dog)

    return (
        <div>
         
            {dog[0] ? <div>
                Nombre:{dog[0].name} <br />
                Peso:{dog[0].weight} <br />
                Altura:{dog[0].height} <br />
                Longevidad:{dog[0].life_span} <br />
                Temperamento:{dog[0].temperament} <br />
                Imagen: <br />
                <img src={dog[0].image.url} alt="doggie" />                

                </div> : 'Cargando'}
        </div>
    )
}