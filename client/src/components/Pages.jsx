import React, { Component } from 'react'

export default class Pages extends Component{


    render(){
        let pageNumbers = [];



        for (let i = 1; i <= Math.ceil(this.props.allBreeds / this.props.dogsInPage); i++) {
            pageNumbers.push(i)
            
        }

        return (
           <div className='paginado-container'>
               <ul className='paginas'>
                   {pageNumbers && pageNumbers.map((el, i) => {
                       if(this.props.actualPage === i+1) return <li className='numeros-pagina active' key={i} onClick={()=> this.props.paginado(el)}>
                       <p key={i}> {el} </p>
                   </li>
                       return <li className='numeros-pagina' key={i} onClick={()=> this.props.paginado(el)}>
                                    <p key={i}> {el} </p>
                                </li>
                   })}
               </ul>
           </div>
        )
    }
}