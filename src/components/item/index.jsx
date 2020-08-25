import React, { useState , useEffect} from 'react'
import api from '../../service/apiD1'
import { useDataLayerValue } from '../../service/dataLayer'
import './index.css'

function Item({id ,name, quantity}){
  
    const [ active, setActive ] = useState(false)

    const [ {journey} ,dispatch] = useDataLayerValue()

    function clickJornadas(id){

        setActive(!active)

        if(id === 0){

            api.get('journey')
                .then(response => 
            
                    dispatch({
                    type: 'SET_JOURNEY',
                    journey: response.data
                    }),
                    
                );
        }
        else {

                api.get('journey/'+ id)
                .then(response => 
            
                    dispatch({
                        type: 'SET_JOURNEY',
                        journey: response.data
                    }),
                

                );

            }


        

        console.log(id)

    }

    return(
        
        <>  

            <span id={id} className={'itemJornadas ' + active} onClick={() => (clickJornadas(id))} >

                <p className={'svgbox Itemsvg' + id} />

                <p className='name'> {name} </p>

                <p className='number'> {quantity} </p>
            </span>

        </>

    )


}

export default Item