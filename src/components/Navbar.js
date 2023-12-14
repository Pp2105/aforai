 import React,{useState} from 'react'
 import logo from '../assets/logo.png';
 import { GiHamburgerMenu } from "react-icons/gi";
 import {  RiCloseLine } from 'react-icons/ri';
 import './Navbar.css'
 
 const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
   return (
     <div className='nav-container'>
      <div className='nav-logo'><img src={logo} alt=""/>Afforai</div>
      <div className='nav-links'>
        <p><a href="Affiliate">Affiliate</a></p>
        <p><a href="Pricing">Pricing</a></p>
        <p><a href="Testimonials">Testimonials</a></p>
        <p><a href="HelpCenter">Help Center</a></p>

      </div>
      <div className='nav-buttons'>
        <button className='logIn'>Login</button><button className='tryForFree'>Try for free </button>
      </div>
       <div className='navbar-menu'> 
      {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu color="#black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nav-menu_container">
          <div className="nav-menu_container-links">
          <p><a href='#Affiliate'>Affiliate</a></p>
          <p><a href='#Pricing'>Pricing</a></p>
          <p><a href="Testimonials">Testimonials</a></p>
          <p><a href='#HelpCenter'>HelpCenter</a></p>
          </div>
         
        </div>
        )}
        </div>
      
     </div>
   )
 }
 
 export default Navbar