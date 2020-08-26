import React, { useState , useEffect} from 'react'
import api from '../../service/apiD1'
import { useDataLayerValue } from '../../service/dataLayer'
import './index.css'

function FilterItens({id ,name, quantity}){
  
    const [ checked, setChecked ] = useState(false)
    const [active, setActive] = useState(false)
    const [ {journey} ,dispatch] = useDataLayerValue()

    const handleOnchange = event => {

        setActive(!active)
        setChecked(event.target.checked)

    }

    function clickJornadas(id){

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

    }

    return(
        
        <>  
            <input id={id} type="checkbox" 
                onClick={() => (clickJornadas(id))} 
                onChange={handleOnchange}
                data-active={active}
                defaultChecked={checked}
            />
            <label htmlFor={id}>
             
                <span id={id} className={'itemJornadas ' + active}>

                    <p className={'svgbox Itemsvg' + id} />

                    <p className='name'> {name} </p>

                    <p className='number'> {quantity} </p>
                </span>


            </label>
            
        </>

    )


}

export default FilterItens