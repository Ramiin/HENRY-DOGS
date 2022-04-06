import React, { Component } from 'react'

export default class Pages extends Component{


    render(){
        let pageNumbers = [];



        for (let i = 0; i <= Math.ceil(this.props.allBreeds / this.props.dogsInPage); i++) {
            pageNumbers.push(i)
            
        }

        console.log(pageNumbers)
        return (
           <div className='paginado'>
               <ul>
                   {pageNumbers && pageNumbers.map((el, i) => {
                       return <li key={i}>
                                    <a key={i} onClick={()=> this.props.paginado(el)}>{el}</a>
                                </li>
                   })}
               </ul>
           </div>
        )
    }
}