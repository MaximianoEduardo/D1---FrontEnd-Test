import React, {useEffect, useState} from 'react'
import JourneyItem from '../itemJourney'
import { useDataLayerValue } from '../../service/dataLayer'
import api from '../../service/apiD1'
import './index.css'

function Journey(){
  
    const [ {journey}  , dispatch] = useDataLayerValue()


    useEffect(() => {
        api.get('journey')
        .then(response => 
    
            dispatch({
                type: 'SET_JOURNEY',
                journey: response.data
            }),
            
        );
          
    }, []); 

    return(
        
        <>  
    
            <div className='journeyTable'>

                
                <div className='journeyHeader'>
                    <span className='journeyName'>nome</span>
                    <span className='journeyDestiny'>destinatários</span>
                    <span className='journeySucess'>sucesso</span>
                    <span className='journeyStatus'>status</span>

                </div>
                

                <div>

                    {

                        journey.map(journeyItem => {

                            return(
                                
                                <JourneyItem 
                                    key={journeyItem.id} 
                                    id={journeyItem.id} 
                                    name={journeyItem.name}
                                    destinary={journeyItem.recipients}
                                    status={journeyItem.status}
                                    sucess={journeyItem.success}
                                />
                            )

                         })

                    }


                </div>


            </div>
            


        </>

    )


}

export default Journey
