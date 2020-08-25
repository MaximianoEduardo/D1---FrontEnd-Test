import React from 'react'

function JourneyItem({ id, name, destinary, status, sucess }){
  
    
    function statusString()
        {    

            //console.log(status)

            switch (status) {
                case status === 1:
                    return 'Em execução'
                case status === 2 :
                    return 'ativa'
                case status === 3 :
                    return 'Configurando'
                case status === 4 :
                    return 'Ociosa'
                case status === 5 :
                    return 'Concluida'
                default :
                    return console.log('ok')
            }

        }
    
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

            <span>
                {
                                 
                    status

                }
            </span>

        </div>


       
    )


}

export default JourneyItem
