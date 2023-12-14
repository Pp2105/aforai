import React from 'react'
import './Background.css'
import laptopBG from '../assets/laptopbackground.png'
import pic1 from '../assets/laptop-landing-1.png.png'
const Background = () => {
  return (
          
         <div className='images-container'>
          
            <img className ="laptopBG" src={laptopBG} alt="img"/><img className='pic1' src={pic1} alt="img"/> 
             
                  </div>
                   
    
  )
}

export default Background