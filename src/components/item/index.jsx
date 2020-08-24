import React from 'react'
import todasSvg from '../../assets/icons/table.svg'


function Item({name}){
  

    return(
        
        <>  

            <span className='itemJornadas active'>

                <img src={todasSvg} alt=""/>

                <p className='name'> {name} </p>

            </span>

        </>

    )


}

export default Item