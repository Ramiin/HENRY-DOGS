import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, getAllDogs } from '../redux/actions';
import DogCard from './DogCard'

export default function Home(){

    let dispatch = useDispatch();
    let temperaments = useSelector(state => state.temps)
    let allBreeds = useSelector(state => state.dogs)

    useEffect(()=>{
        dispatch(getTemperaments())
        dispatch(getAllDogs())
    }, [dispatch])

    // let breeds = allBreeds.map(el => el.name)


    return(
        <React.Fragment>
        <div className='flex-main-container'>
            <div id="searchbar">
                <label htmlFor="temperaments">Temperamentos: </label>
                
                <select name="temperaments">
                    <option value='all'> Todos</option>
                    {temperaments?.length>0 && temperaments?.map((el, i) => {
                        return <option key = {i} value={el.name}>{el.name}</option>
                    })}
                </select>

                <label htmlFor="breeds">Razas: </label>
               
                <select name="breeds">
                    <option value='all'> Todas</option>
                    <option value='api'>... de la web</option>
                   <option value='community'>... de la comunidad</option>
                    
                </select>

                <label htmlFor="order">Orden: </label>
                <select name="order">
                    <option value='none'> </option>
                     <option value='asc'>A - Z</option>
                     <option value='desc'>Z - A</option>
                     <option value='desc'>Peso min. (- a +)</option>
                     <option value='desc'>Peso min. (+ a -)</option>
                     <option value='desc'>Peso max. (- a +)</option>
                     <option value='desc'>Peso max. (+ a -)</option>
                </select>
                <form >
                    <label htmlFor="searching">Buscar: </label>
                    <input type="text" name='searching' />
                    <input type='submit' value='🔍'/>               
                    </form>
                
            </div>
            </div>

            
                    <div className="cards-container">
                    {allBreeds.length>0 ? allBreeds.map((el, i) => <DogCard dog = {el} key ={i}/>) : "Cargando"}
                    
                    </div>
        
        </React.Fragment>
    )
}