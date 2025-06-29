import React from 'react';


import {Routes, Route} from 'react-router-dom';

// import components
import Header from './components/Header/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';
import PropertyDetails from './components/PropertyDetail/PropertyDetails';
import Residencies from './components/Residencies/Residencies';

const App = () => {
  return (
    <div className='App max-w-[14400px] mx-auto bg-white overflow-x-hidden'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
          <Route path='/Residencies' element={<Residencies />} />
        </Routes>
      <Footer/>
    </div>
  )
};

export default App;
