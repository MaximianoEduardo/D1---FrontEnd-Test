import React , { useEffect, useState }from 'react'
import api from './service/apiD1'
import { useDataLayerValue } from './service/dataLayer'
import SideBar from './components/sidebar';
import Header from './components/header';
import ItemJornadas from './components/itemJornadas'
import './App.css';

function App() {

  const [ filter  , dispatch] = useDataLayerValue()

    
  useEffect(() => {
    api.get('filter')
    .then(response => 

      dispatch({
        type: 'SET_FILTER',
        filter: response.data
      })
    );
  }, []); 

  return (
    <div className="App">
      <SideBar />
      <Header />

      <div className='leftContent'>

        <h2> Jornadas </h2>

        <ItemJornadas/>


      </div>
      

    </div>
  );
}

export default App;
