import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, getAllDogs, order, search} from '../redux/actions';
import DogCard from './DogCard';
import Pages from './Pages'; //Paginado

export default function Home(){



    let dispatch = useDispatch();
    let allBreeds = useSelector(state => state.dogs) //Perros mostrados en las cards
    let temperaments = useSelector(state => state.temps)
    let [currentPage, setCurrentPage] = useState(1);
        let dogsInPage = 8;
    let [orders, setOrders] = useState({
        temperament:'',
        breed: '',
        order: ''

    })
   

    const lastIndex = currentPage*dogsInPage
    const firstIndex = lastIndex - dogsInPage
    const currentDogs = function(){
        if (allBreeds.length===0) return allBreeds; //Si no hay dogs para mostrar
        else return allBreeds?.slice(firstIndex, lastIndex) //Dividimos el array original con los perros a mostrar
    }()
 
    const paginado = (num) => {
        setCurrentPage(num)
    }
 
    useEffect(()=>{
        dispatch(getTemperaments())
        dispatch(getAllDogs())
  
    }, [dispatch]);
    
//Para manejar el orden
    function handleSelectAll(e){

        if(e.target.name==='temperaments'){
            setOrders(prevState =>{
                return {...prevState, temperament: e.target.value}
            }) 
            dispatch(order({...orders, temperament: e.target.value})) //dispatch con el objeto de los ordenes

        }
        if(e.target.name==='breeds'){
            setOrders({...orders, breed: e.target.value}) 
            dispatch(order({...orders, breed: e.target.value}))

        } else if (e.target.name==='order'){
            setOrders({...orders, order: e.target.value})
            dispatch(order({...orders, order: e.target.value}))
        } 
            setCurrentPage(1) //para setear siempre la pagina a 1
        }

        function handleSearchSubmit(e){
            e.preventDefault()
            dispatch(search(e.target[0].value))
            setCurrentPage(1)
        }


    return(
        <React.Fragment>
        <div className='flex-main-container'>
            <div className='flex-inline'>
            <div className="searchbar-container">

                <h3 className='fs-subtitle' style={{margin:'1px'}}>FILTRAR POR:</h3>
{/* Orden temperamentos */}
                <div className="select">
                <select name="temperaments" onChange={handleSelectAll}>
                    <option value="" selected disabled hidden>Temperamento:</option>
                    <option value='alltemps'> Todos</option>
                    {temperaments?.length>0 && temperaments?.map((el, i) => {
                        return <option key = {i} value={el.name}>{el.name}</option>
                    })}
                </select>
                </div>
{/* Orden origen */}
                <div className="select"> 
                <select name="breeds"  onChange={handleSelectAll}>
                    <option value="" selected disabled hidden>Origen:</option>
                    <option value='allbreeds'> Todas</option>
                    <option value='api'>... de la web</option>
                   <option value='community'>... de la comunidad</option>
                    
                </select>
                    </div>
{/* Orden en especifico */}
                <div className="select">
                <select name="order"  onChange={handleSelectAll}>
                    <option value="" selected disabled hidden>Ordenado:</option>
                    <option value='none'>Ninguno</option>
                     <option value='az'>A - Z</option>
                     <option value='za'>Z - A</option>
                     <option value='wmin-minmax'>Peso min. (- a +)</option>
                     <option value='wmin-maxmin'>Peso min. (+ a -)</option>
                     <option value='wmax-minmax'>Peso max. (- a +)</option>
                     <option value='wmax-maxmin'>Peso max. (+ a -)</option>
                </select>
                </div>
                </div>
{/* Searchbar */}
                <div className='searchbar-container'>
            <form onSubmit={handleSearchSubmit}>
                    <input type="text" name='searching' autoComplete='off' placeholder='Buscar por nombre' />
                    <input type='submit' value='????'/>               
                    </form>
            </div>
{/* Button recargar */}
            <div className='searchbar-container'>
            
                    <button onClick={()=>{dispatch(getAllDogs())}}>CARGAR TODO</button>              
           
            </div>
                    
            </div>

                        {/* <div className='searchbar-container'>
            
                    <button onClick={()=>{dispatch(getAfricans())}}>AFRICAN</button>              
           
            </div> */}
                    
           


{/* //Renderizado de paginado: */}
            <Pages 
                allBreeds = {allBreeds?.length} //Los perros que tengo en ese momento
                dogsInPage = {dogsInPage}
                paginado ={paginado} 
                actualPage={currentPage}/>
            </div>

            
{/* Renderizado de cards */}
                    <div className="cards-container"> 

                    {currentDogs?.length>0 ? currentDogs.map((el, i) => <DogCard dog = {el} key ={i}/>) : <span className="loader"></span>}

                   
                    
                    </div>
        
        </React.Fragment>
    )
}