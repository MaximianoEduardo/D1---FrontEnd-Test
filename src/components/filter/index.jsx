import React from 'react'
import { useDataLayerValue } from '../../service/dataLayer'
import FilterItens from '../filterItens/index'
import './index.css'


function Filter(){
  
    const [ {filter}  ] = useDataLayerValue()

    return(
        
        <>  

            {

               filter.map(filterItem => {

                 return(
                    <FilterItens 
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

export default Filter
