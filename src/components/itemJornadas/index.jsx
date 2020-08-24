import React , { useEffect, useState }from 'react'
import { useDataLayerValue } from '../../service/dataLayer'
import todasSvg from '../../assets/icons/table.svg'
import Item from '../item/index'
import './index.css'


function ItemJornadas(){
  
    const [ {filter}  , dispatch] = useDataLayerValue()

    

    return(
        
        <>  

            {

               filter.map(filterItem => {

                 return(
                    console.log(filterItem),
                    <Item key={filterItem.id} name={filterItem.name} />
                )

               })
                


            }

        </>

    )


}

export default ItemJornadas
