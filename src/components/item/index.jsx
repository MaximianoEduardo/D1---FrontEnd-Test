import React from 'react'
import './index.css'

function Item({id ,name, quantity}){
  
    

    return(
        
        <>  

            <span className='itemJornadas'>

                <p className={'svgbox Itemsvg' + id} />

                <p className='name'> {name} </p>

                <p className='number'> {quantity} </p>
            </span>

        </>

    )


}

export default Item