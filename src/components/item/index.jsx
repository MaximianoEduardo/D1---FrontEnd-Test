import React from 'react'
import { useDataLayerValue } from '../../service/dataLayer'
import todasSvg from '../../assets/icons/table.svg'


function Item({name, number}){
  
    const [ {filter}  , dispatch] = useDataLayerValue()


    return(
        
        <>  

            <span className='itemJornadas active'>

                <img src={todasSvg} alt=""/>

                <p className='name'> {filter.name} </p>

                <p className='number'> {filter.number} </p>
            </span>

        </>

    )


}

export default Item