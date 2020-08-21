import React , { useEffect, useState }from 'react'
import { useDataLayerValue } from '../../service/dataLayer'
import todasSvg from '../../assets/icons/table.svg'
import './index.css'


function ItemJornadas(){
  
    const [ {filter}  , dispatch] = useDataLayerValue()


    return(
        
        <>  
            {
            
                filter.data.map(item => (

                    console.log(item.name)

                ))
            
            }

        </>

    )


}

export default ItemJornadas
