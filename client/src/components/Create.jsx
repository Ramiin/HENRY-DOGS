import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../redux/actions';


export default function Create(){



    const [form, setForm] = useState({
        name: '',
        minheight: '',
        maxheight: '',
        minweight: '',
        maxweight: '',
        yearsmin:'',
        yearsmax: '',
        temperamentToPost: [],
        temperament: '',
        image: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        minheight: '',
        maxheight: '',
        minweight: '',
        maxweight: '',
        yearsmin:'',
        yearsmax: '',
        temperament: '',
        image: '',
        submit: ''
    });
 
    const allTemperaments = useSelector(state => state.temps);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    function handleFields(e){

        if(e.target.name==='temperament'){
            setErrors(prevState => {
                return {...prevState, [e.target.name]: ''}
            })
        }

        setForm(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
        
        setErrors(prevState => {
            return {...prevState, [e.target.name]: ''}
        })

    }

    function handleErrors(e){

        let error = function(){
            if (e.target.value === '') return 'El campo no debe estar vacío.';
            else if (e.target.name==='name') return 'El campo debe contener solo letras.';
            else if (e.target.name==='minheight' || e.target.name==='maxheight' || e.target.name==='minweight' || e.target.name==='maxweight' || e.target.name==='yearsmin'|| e.target.name==='yearsmax') return 'El campo debe debe tener sólo números';
            else if (e.target.name === 'temperament') return 'El temperamento no se encuentra en la lista.'
            else if (e.target.name === 'image') return 'Este campo debe contener una URL. '

        }()

        setErrors(prevState => {
            return {...prevState, [e.target.name]: error}
        })

    }
    function addTemperamentButton(){
        let selector = document.getElementById('temperaments');
        let selectorDuplicate = {...selector}
        setForm(prevState => {
            return {...prevState, temperamentToPost: form.temperamentToPost.concat(selectorDuplicate.value)};
        })

        selector.value = ''

    }

    function handleForm(e){

        if(e.target.name === 'name'){
            /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test(e.target.value) ? handleFields(e) : handleErrors(e)
        }

        else if (e.target.name==='minheight' || e.target.name==='maxheight' || e.target.name==='minweight' || e.target.name==='maxweight' || e.target.name==='yearsmin'|| e.target.name==='yearsmax'){
        e.target.value.length===0 || isNaN(e.target.value*1) ? handleErrors(e) : handleFields(e)
        } 
        else if(e.target.name === 'temperament') {
            const temperamentsName = allTemperaments.map(el => el.name); //Filtrando solo los names
            temperamentsName.includes(e.target.value) ? handleFields(e) : handleErrors(e)
        }
        else if(e.target.name === 'image'){
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(e.target.value) ? handleFields(e) : handleErrors(e)
        }
        else{
            handleFields(e)
        }
       
    }



    function handleSubmit(e){
        e.preventDefault();
        
        let tempsToPost = form.temperamentToPost.join(', ')
        let {name, minheight, maxheight, minweight, maxweight, yearsmin, yearsmax, image} = form;
        let errorsCount = 0;
        let dataSaved = 0

       for (const prop in errors){
            if(errors[prop]){
                errorsCount++
            }
       } 
       for (const prop in form){
            if(prop==='temperament'){
                //NO HACER NADA
            }
            else if(form[prop].length>=1){
                dataSaved++
            }
       }
       if(errorsCount===0 && dataSaved>=9){
        let doggo = {
            name,
            height: minheight+' - '+maxheight,
            weight: minweight+' - '+maxweight,
            life_span: yearsmin + ' - ' + yearsmax + ' years',
            temperament: tempsToPost,
            image: {
                url: image
            }
        }

            dispatch(postDog(doggo))
            alert('Raza creada con éxito :)')
            setForm({
                name: '',
                minheight: '',
                maxheight: '',
                minweight: '',
                maxweight: '',
                yearsmin:'',
                yearsmax: '',
                temperamentToPost: [],
                temperament: '',
                image: ''
            })
    
            setErrors({
                name: '',
                minheight: '',
                maxheight: '',
                minweight: '',
                maxweight: '',
                yearsmin:'',
                yearsmax: '',
                temperament: '',
                image: '',
                submit: ''
            })
       }

    }

    return (
        <div>
            
            <form autoComplete="off" action="" onSubmit={(e)=>{handleSubmit(e)}}>
                <label htmlFor="name">Nombre:</label> 
                <input type="text" name='name' value={form.name} onChange={(e)=>handleForm(e)}/><br />
                {errors.name && <p className='form-error'>{errors.name} </p> }

                <label htmlFor="minheight">Altura mínima:</label>
                <input type="text" name='minheight' value={form.minheight} onChange={handleForm}/><br />
                {errors.minheight && <p className='form-error'>{errors.minheight} </p> }

                <label htmlFor="maxheight">Altura máxima:</label>
                <input type="text" name='maxheight' value={form.maxheight} onChange={handleForm}/><br />
                {errors.maxheight && <p className='form-error'>{errors.maxheight} </p> }

                <label htmlFor="minweight">Peso mínimo:</label>
                <input type="text" name='minweight' value={form.minweight} onChange={handleForm}/><br />
                {errors.minweight && <p className='form-error'>{errors.minweight} </p> }

                <label htmlFor="maxheight">Peso máximo:</label>
                <input type="text" name='maxweight' value={form.maxweight} onChange={handleForm}/><br />
                {errors.maxweight && <p className='form-error'>{errors.maxweight} </p> }

                <label htmlFor="years">Años de vida mínimos:</label>
                <input type="text" name='yearsmin' value={form.yearsmin} onChange={handleForm}/><br />
                {errors.yearsmin && <p className='form-error'>{errors.yearsmin} </p> }

                <label htmlFor="years2">Años de vida máximos:</label>
                <input type="text" name='yearsmax' value={form.yearsmax} onChange={handleForm}/><br />
                {errors.yearsmax && <p className='form-error'>{errors.yearsmax} </p> }

                <label htmlFor="temperamento">Temperamento:</label>
                <input id="temperaments" name= 'temperament' list="suggestions" onChange={handleForm} /> <button onClick={()=>addTemperamentButton()}>+</button>
                {errors.temperament && <p className='form-error'>{errors.temperament} </p> }
                {form.temperamentToPost?.map(el => {
                    return <p key={el}>{el}</p>
                })}
                    <datalist id="suggestions">
                        {allTemperaments && allTemperaments.map((el, i) =>{
                            return <option key = {i} value={el.name} />
                        })}
                    </datalist> <br />

                <label htmlFor="image" onChange={handleForm} value={form.image}>Imagen (URL):</label>
                <input type="text" name='image' onChange={handleForm} value={form.image}/><br />
                {errors.image && <p className='form-error'>{errors.image} </p> }
            
                <button type="submit">Agregar </button>
                {errors.submit && <p className='form-error'>{errors.submit} </p> }

        </form>



        </div>
    )
}