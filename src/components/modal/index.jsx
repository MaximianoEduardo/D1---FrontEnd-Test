import React from 'react'
import './index.css'

function Modal({ isShowing, hide }) {
  
  

  return (
    
    <>
        {
            isShowing ? (
                <>
                <div className="modal-overlay"/>
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className="modal">
                            <div className="modal-header">
                                <h2> Nova Jornada </h2>
                                <p/>                              
                            </div>
                            <div className="modal-body">
                                <label htmlFor="novaJornada">
                                    Dê um <bold> nome </bold>  para essa Jornada
                                </label>
                                <input />
                                <label className='legend'>
                                    Você poderá alterar essa informação depois.
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="modal-continue-button" data-dismiss="modal" onClick={hide} aria-label="Continuar">
                                    <span aria-hidden="true">Continuar</span>
                                </button>
                                <button type="button" className="modal-close-button" data-dismiss="modal" onClick={hide} aria-label="Close">
                                    <span aria-hidden="true">Cancelar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (

                <>
                </>

            )


        }
        
    </>
    
  
  )
}

export default Modal;