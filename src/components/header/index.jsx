import React, {useState} from 'react'
import CompanyLogo from '../../assets/images/acme-logo.png'
import plusIcon from '../../assets/icons/plus.svg'
import Tooltip from 'react-simple-tooltip'
import './index.css'
import Modal from '../modal'


function Header(){

    const [ show, setShow ] = useState( false )

    return(

        <div className="header">

            <div className="right__header">

                <Tooltip 
                    content="Antonio da Silva"
                    color='#fff'
                    background='#1A1731'
                    placement='right'
                    border='none'
                    fontSize='13'
                    padding={9}
                    radius={7}
                    arrow={7}
                >
                    <span className='header__user'> A </span>
                </Tooltip>
                

                <span className="header__company">
                    <img src={CompanyLogo} alt="logo da companhia"/>
                </span>

            </div>


            <div className="left__header">

                <input type="text" placeholder='Buscar' />

                <a href='#' className='left__buttonJornada' id="centered-toggle-button" onClick={ () => (setShow(!show)) } > 
                   <img src={plusIcon} alt=""/>  Nova Jornada
                   <Modal show={show} />
                </a>

            </div>

        </div>



    )


}

export default Header
