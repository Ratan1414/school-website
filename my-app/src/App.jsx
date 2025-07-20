import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About_us from './components/About_us';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Events from './components/Events';
import Volunteer from './components/Volunteer';
import Donate from './components/Donate'
import Contact_us from './components/Contact_us'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About_us" element={<About_us/>}/>
    <Route path="/Academics" element={<Academics/>}/>
    <Route path="/Admissions" element={<Admissions/>}/>
    <Route path="/Events" element={<Events/>}/>
    <Route path="/Volunteer" element={<Volunteer/>}/>
    <Route path="/Contact_us" element={<Contact_us/>}/>
    <Route path="/Donate" element={<Donate/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App