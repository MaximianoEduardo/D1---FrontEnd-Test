import React, { useEffect, useState } from 'react';
import './index.css'

function Search() {


  const [ searchTerm, setSearchTerm ] = useState("");

  
  const handleChange = ev => {
  
    setSearchTerm(ev.target.value);
    

  }

  useEffect(() => {

    
        


  }, [searchTerm])

  return (

    <>
        <input 
            type="text" 
            placeholder='Buscar'
            value={searchTerm}
            onChange={handleChange}
        />
        <span className='img'></span>

    </>
    

  )
}

export default Search;