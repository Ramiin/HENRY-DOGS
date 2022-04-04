import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../redux/actions';
import axios from 'axios';


export default function Create(){



    const [form, setForm] = useState({});
    const [body, setBody] = useState({});
    const [errors, setErrors] = useState({});
    const temperaments = useSelector(state => state.temps);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [])

    function handleFields(e){
        setErrors(prevState => {
            return {...prevState, [e.target.name]: ''}})
        setForm(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })


    }

    function handleErrors(e){

        let error = function(){
            if (e.target.name==='name') return 'El campo debe contener solo letras.';
            if (e.target.name==='minheight' || e.target.name==='maxheight' || e.target.name==='minweight' || e.target.name==='maxweight' || e.target.name==='years') return 'El campo debe debe tener sólo números';
        }()

        setErrors(prevState => {
            return {...prevState, [e.target.name]: error}
        })

    }

    function handleForm(e){
        if(e.target.name === 'name'){
            /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test(e.target.value) ? handleFields(e) : handleErrors(e)
        }

        if (e.target.name==='minheight' || e.target.name==='maxheight' || e.target.name==='minweight' || e.target.name==='maxweight' || e.target.name==='years'){
            /^[0-9]$/.test(e.target.value) ? handleFields(e) : handleErrors(e)

        }
        else handleFields(e)

    
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form)
    }

    return (
        <div>
            Soy el componente create :D debo tener:
            Un formulario controlado con JavaScript con los siguientes campos:

            <ul>
                <li>Nombre</li>
                <li>Altura (Diferenciar entre altura mínima y máxima)</li>
                <li>Peso (Diferenciar entre peso mínimo y máximo)</li>
                <li>Años de vida</li>
                <li>Posibilidad de seleccionar/agregar uno o más temperamentos</li>
                <li>Botón/Opción para crear una nueva raza de perro</li>
                <li>Validar form</li>
            </ul>

            <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                <label htmlFor="name">Nombre:</label> 
                <input type="text" name='name'onChange={(e)=>handleForm(e)}/><br />
                {errors.name && <p className='form-error'>{errors.name} </p> }

                <label htmlFor="minheight">Altura mínima:</label>
                <input type="text" name='minheight'onChange={handleForm}/><br />
                {errors.minheight && <p className='form-error'>{errors.minheight} </p> }

                <label htmlFor="maxheight">Altura máxima:</label>
                <input type="text" name='maxheight'onChange={handleForm}/><br />
                {errors.maxheight && <p className='form-error'>{errors.maxheight} </p> }

                <label htmlFor="minweight">Peso mínimo:</label>
                <input type="text" name='minweight'onChange={handleForm}/><br />
                {errors.minweight && <p className='form-error'>{errors.minweight} </p> }

                <label htmlFor="maxheight">Peso máximo:</label>
                <input type="text" name='maxweight'onChange={handleForm}/><br />
                {errors.maxweight && <p className='form-error'>{errors.maxweight} </p> }

                <label htmlFor="years">Años de vida:</label>
                <input type="text" name='years'onChange={handleForm}/><br />
                {errors.years && <p className='form-error'>{errors.years} </p> }

                <label htmlFor="temperamento">Temperamentos</label>
                <input type="text" name='temp' onChange={handleForm}/><br />
            
                <button type="submit">Agregar </button>

        </form>



        </div>
    )
}