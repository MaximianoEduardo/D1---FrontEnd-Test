import React, { useState } from 'react'
import './index.css'

function Item({id ,name, quantity}){
  
    const [ active, setActive ] = useState(false)


    function clickJornadas(){

        setActive(!active)

    }

    return(
        
        <>  

            <span className={'itemJornadas ' + active} onClick={clickJornadas()} dataId={id} >

                <p className={'svgbox Itemsvg' + id} />

                <p className='name'> {name} </p>

                <p className='number'> {quantity} </p>
            </span>

        </>

    )


}

export default Item