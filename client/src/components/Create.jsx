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
    const allTemperamentsMapped = allTemperaments?.map(el => el.name);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    function handleFields(e){

        if(e.target.name==='temperament'){ //Me quita los errores del temperament
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
            else if (e.target.name==='name') return 'El nombre debe contener solo letras.';
            else if (e.target.name==='minheight') return 'La altura mínima debe debe ser sólo números';
            else if (e.target.name==='maxheight') return 'La altura máxima debe debe ser sólo números';
            else if (e.target.name==='minweight') return 'El peso mínimo debe debe ser sólo números';
            else if (e.target.name==='maxweight') return 'El peso máximo debe debe ser sólo números';
            else if (e.target.name==='yearsmin') return 'Los años mínimos deben ser sólo números';
            else if (e.target.name==='yearsmax') return 'Los años máximos deben ser sólo números';
            else if (e.target.name === 'temperament') return 'El temperamento no se encuentra en la lista.'
            else if (e.target.name === 'image') return 'Este campo debe contener una URL válida.'

        }()

        setErrors(prevState => {
            return {...prevState, [e.target.name]: error}
        })
        setForm(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })

    }
    function addTemperamentButton(){
        let selector = document.getElementById('temperaments');
        let selectorDuplicate = {...selector}
        if(form.temperamentToPost.includes(selectorDuplicate.value)){
            selector.value = ''
            return 1; //No hace nada (Solo para cortar ejecuccion)
        }
        if(!allTemperamentsMapped.includes(selectorDuplicate.value)){
            selector.value = ''
            return 1; //No hace nada (Solo para cortar ejecuccion)
        }
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
            /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi.test(e.target.value) ? handleFields(e) : handleErrors(e)
        }
        else{
            handleFields(e)
        }
       
    }



    function handleSubmit(e){
        e.preventDefault();

        
        let tempsToPost = form.temperamentToPost
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

    function deleteTemp(temperament){
        let temperaments=  form.temperamentToPost.filter(el => el!==temperament)
        setForm(prevState=>{
            return {...prevState, temperamentToPost: temperaments}
        })
    }

    return (
        <div className='flex-center-container'>
            
            <form autoComplete="off" className='msform' onSubmit={(e)=>{handleSubmit(e)}}>
                <fieldset>
                <h2 className='fs-title'>AGREGAR NUEVA RAZA</h2>
                <h3 className="fs-subtitle">Rellena todos los campos</h3>
                <input type="text" placeholder='Nombre' name='name' onChange={(e)=>handleForm(e)} value={form.name} /><br />
                {errors.name && <p className='form-error'>{errors.name} </p> }

                
                <input type="text" className='half' placeholder='Altura mínima' name='minheight' value={form.minheight} onChange={handleForm}/>
                <span> - </span>
                <input type="text" className='half' name='maxheight' placeholder='Altura máxima' value={form.maxheight} onChange={handleForm}/>
                {errors.minheight && <p className='form-error'>{errors.minheight} </p> }
                {errors.maxheight && <p className='form-error'>{errors.maxheight} </p> }


                <input type="text" className='half' name='minweight' placeholder='Peso mínimo' value={form.minweight} onChange={handleForm}/>
                
                <span> - </span>
                <input type="text" className='half' name='maxweight' placeholder='Peso máximo' value={form.maxweight} onChange={handleForm}/>
                {errors.minweight && <p className='form-error'>{errors.minweight} </p> }
                {errors.maxweight && <p className='form-error'>{errors.maxweight} </p> }

                <input type="text" className='half' name='yearsmin' placeholder='Años de vida mínimos' value={form.yearsmin} onChange={handleForm}/>
                <span> - </span>
                <input type="text" className='half' name='yearsmax' placeholder='Años de vida máximos' value={form.yearsmax} onChange={handleForm}/>
                {errors.yearsmin && <p className='form-error'>{errors.yearsmin} </p> }
                {errors.yearsmax && <p className='form-error'>{errors.yearsmax} </p> }
                <br />
                <label className='labelfortemp'htmlFor="temperamento"><p>Temperamento:</p></label><br />
                <input id="temperaments" className='temp-input' name= 'temperament' placeholder='Escribe o selecciona uno o más temperamentos' list="suggestions" onChange={handleForm} /> <button className='temp-button' onClick={()=>addTemperamentButton()}>+</button>
                {errors.temperament && <p className='form-error'>{errors.temperament} </p> }
                <div className='temps-to-post'>
                {form.temperamentToPost?.map(el => {
                    return <p className='temp-tag' key={el}>{el+'  '}<span name= {el} onClick={()=> deleteTemp(el)}className='delete-temp'>X</span></p>
                })}
                </div>
                    <datalist id="suggestions">
                        {allTemperaments && allTemperaments.sort((a, b)=>{
                                let fa = a.name,
                                    fb = b.name;
                                    if(fa<fb) return -1;
                                    if(fa>fb) return 1;
                                    return 0;
                            }).map((el, i) =>{
                            return <option key = {i} value={el.name} />
                        })}
                    </datalist> <br />

                <input type="text" placeholder='URL de imagen' name='image' onChange={handleForm} value={form.image}/><br />
                {errors.image && <p className='form-error'>{errors.image} </p> }
            
                <button type="submit" className='action-button'>Agregar </button>
                {errors.submit && <p className='form-error'>{errors.submit} </p> }
            </fieldset>
        </form>


        </div>
    )
}