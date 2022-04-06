import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, getAllDogs} from '../redux/actions';
import DogCard from './DogCard';
import Pages from './Pages';

export default function Home(){



    let dispatch = useDispatch();
    let allBreeds = useSelector(state => state.dogs)
    let temperaments = useSelector(state => state.temps)
    let [currentPage, setCurrentPage] = useState(1);
    let [dogsInPage, setElementsInPage] = useState(8);
    const lastIndex = currentPage*dogsInPage
    const firstIndex = lastIndex - dogsInPage
    const currentDogs = allBreeds.slice(firstIndex, lastIndex)
 
    const paginado = (num) => {
        setCurrentPage(num)
    }
 
    useEffect(()=>{
        dispatch(getTemperaments())
        dispatch(getAllDogs())
  
    }, [dispatch])
    

   







    function handleSelect(e){
        console.log(e.target.value)

    }


    return(
        <React.Fragment>
        <div className='flex-main-container'>
            <div id="searchbar">
                <label htmlFor="temperaments">Temperamentos: </label>
                
                <select name="temperaments" onChange={handleSelect}>
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
            <Pages 
                allBreeds = {allBreeds.length}
                dogsInPage = {dogsInPage}
                paginado ={paginado} />
            </div>

                    <div className="cards-container"> 

                    {currentDogs?.length>0 ? currentDogs.map((el, i) => <DogCard dog = {el} key ={i}/>) : "Cargando"}

                   
                    
                    </div>
        
        </React.Fragment>
    )
}