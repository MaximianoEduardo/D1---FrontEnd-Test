import React , { useEffect }from 'react'
import api from './service/apiD1'
import { useDataLayerValue } from './service/dataLayer'
import SideBar from './components/Sidebar';
import Header from './components/Header';
import Filter from './components/Filter'
import Journey from './components/Journey';
import './App.css';

function App() {

  const [ journey, dispatch ] = useDataLayerValue()

    
  useEffect(() => {
    
    if(journey){

      api.get('filter')
      .then(response => 

        dispatch({
          type: 'SET_FILTER',
          filter: response.data
        }),
        
      );

    }
    
  }, [dispatch, journey]); 

  return (
    <>
      <SideBar />
      <div className="App">
      
        <Header />

        <div className='mainContent'>

          <div className='leftContent'>

            <h2> Jornadas </h2>

            <Filter/>


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
