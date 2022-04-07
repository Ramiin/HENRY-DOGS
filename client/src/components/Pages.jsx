import React, { Component } from 'react'

export default class Pages extends Component{


    render(){
        let pageNumbers = [];



        for (let i = 1; i <= Math.ceil(this.props.allBreeds / this.props.dogsInPage); i++) {
            pageNumbers.push(i)
            
        }

        return (
           <div className='paginado'>
               <ul>
                   {pageNumbers && pageNumbers.map((el, i) => {
                       return <li key={i} onClick={()=> this.props.paginado(el)}>
                                    <a key={i}> {el} </a>
                                </li>
                   })}
               </ul>
           </div>
        )
    }
}