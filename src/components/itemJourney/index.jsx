import React from 'react'

function JourneyItem({ id, name, destinary, status, sucess }){
  
    
    return(
        
      
    
        <div className='journeyItem'> 
            
            <span className='journeyItemName'>
                {name}
            </span>

            <span className='journeyItemDestiny'>
                {destinary}
            </span>

            <span className='journeyItemSucess'>
                {sucess}
            </span>

            

        </div>


       
    )


}

export default JourneyItem
