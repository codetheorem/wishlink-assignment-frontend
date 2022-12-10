import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BrandsList from './components/BrandsList';
import EarningButton from './components/EarningButton';


function App() {  

  return (
    <div className="App">
      <div>
       <Navbar/>
      </div>
       <Header />
       <div className='app_brands'>
        <BrandsList />
       </div>
       <div className="app_earning_button" >
       <EarningButton />
       </div>
    </div>
  );
}

export default App;
