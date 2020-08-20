import React from 'react'
import CompanyLogo from '../../assets/images/acme-logo.png'
import './index.css'


function Header(){


    return(

        <div className="header">

            <div className="right__header">

                <span className='header__user'> A </span>

                <span className="header__company">
                    <img src={CompanyLogo} alt="logo da companhia"/>
                </span>

            </div>


            <div className="left__header">

                <input type="text" placeholder='Buscar' />

                <a href='' className='left__buttonJornada'> 
                    + Nova Jornada
                </a>

            </div>

        </div>



    )


}

export default Header
