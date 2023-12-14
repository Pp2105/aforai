import logo from './logo.svg';
import React from 'react';
import './App.css';
 import Hero from './components/Hero'
 
import Navbar from './components/Navbar';
import Background from './components/Background';
 

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Background/>
   
     
    </div>
  );
}

export default App;
