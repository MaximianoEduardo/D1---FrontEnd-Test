import React from 'react'
import { useDataLayerValue } from '../../service/dataLayer'
import Item from '../item/index'
import './index.css'


function ItemJornadas(){
  
    const [ {filter}  , dispatch] = useDataLayerValue()

    return(
        
        <>  

            {

               filter.map(filterItem => {

                 return(
                    <Item 
                        key={filterItem.id} 
                        id={filterItem.id} 
                        name={filterItem.name} 
                        quantity={filterItem.quantity} 
                    />
                )

               })

            }

        </>

    )


}

export default ItemJornadas
