import React , { useEffect }from 'react'
import api from './service/apiD1'
import { useDataLayerValue } from './service/dataLayer'
import SideBar from './components/sidebar';
import Header from './components/header';
import ItemJornadas from './components/itemJornadas'
import Journey from './components/journey';
import './App.css';

function App() {

  const [ filter  , dispatch] = useDataLayerValue()

    
  useEffect(() => {
    api.get('filter')
    .then(response => 

      dispatch({
        type: 'SET_FILTER',
        filter: response.data
      }),
      
    );
  }, []); 

  return (
    <>
      <SideBar />
      <div className="App">
      
      <Header />

      <div className='mainContent'>

        <div className='leftContent'>

          <h2> Jornadas </h2>

          <ItemJornadas/>


        </div>

        <div className='rightContent'>

          <Journey />

        </div>
      </div>
    </div>
    </>
    
  );
}

export default App;
