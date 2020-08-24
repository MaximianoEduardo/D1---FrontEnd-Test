import React from 'react'

function Item({id ,name, quantity}){
  
    

    return(
        
        <>  

            <span className='itemJornadas'>

                <p className={'Itemsvg' + id} />

                <p className='name'> {name} </p>

                <p className='number'> {quantity} </p>
            </span>

        </>

    )


}

export default Item