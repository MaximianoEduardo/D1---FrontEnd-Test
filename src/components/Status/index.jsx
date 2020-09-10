import React from 'react';
import './index.css'


function Status({ content, status }) {
  return (

    <>

      <span className='journeyItemStatus'>

        <p className={'svgbox svg' + status} />

        <p className='name'> {content} </p>

      </span>


    </>
        



  )
}

export default Status;