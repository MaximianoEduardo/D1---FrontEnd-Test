import React from 'react';
import SideBar from './components/sidebar';
import Header from './components/header';
import ItemJornadas from './components/itemJornadas'
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />

      <div className='leftContent'>

        <h2> Jornadas </h2>

        <ItemJornadas title='' quantidade='' />


      </div>
      

    </div>
  );
}

export default App;
