import React, { useEffect } from 'react'
import Status from '../Status';

function JourneyItem({ id, name, destinary, status, sucess }){

    function statusFilter(){

        switch (status) {
            case 1:
                return (
                    <Status content='Em execução' status={status} />
                )
            case 2:
                return (
                    <Status content='Ativa' status={status} />
                )    
            case 3:
                return (
                    <Status content='Configurando' status={status} />
                )
            case 4:
                return (
                    <Status content='Ocisosa' status={status} />
                )
            case 5:
                return (
                    <Status content='Concluída' status={status} />
                )  
            default:
                break;
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

            {
                
                statusFilter()

            }

        </div>


       
    )


}

export default JourneyItem
