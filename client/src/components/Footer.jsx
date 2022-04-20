import React from 'react'
import linkedin from '../sources/linkedin.png';
import github from '../sources/github.png';

export default function Footer(){

    return(
    
    <div className='footer'>
        <div>
        <p>HENRY DOGS </p>
        <p>desarrollado por Oscar Rodriguez.</p>
        <p style={{fontSize: '11px'}}>ozcardev@gmail.com</p>
        
        </div>
       
        <div style={{margin:'5px'}}>
        <a href="https://www.linkedin.com/in/ozcardz/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" />  </a>
        <a href="https://github.com/Ramiin" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /> </a>
        
        </div>



    </div>
    
    )

}