import React, {useState} from 'react'
import CompanyLogo from '../../assets/images/acme-logo.png'
import plusIcon from '../../assets/icons/plus.svg'
import Tooltip from 'react-simple-tooltip'
import Modal from '../modal'
import './index.css'


function Header(){


    const useModal = () => {

        const [isShowing, setIsShowing] = useState(false);
      
        function toggle() {
          setIsShowing(!isShowing);
        }
      
        return {
          isShowing,
          toggle,
        }
    };

    const {isShowing, toggle} = useModal();

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
                <span className='img'></span>
                <button type='button' className='left__buttonJornada' onClick={toggle}> 
                   <img src={plusIcon} alt="Nova Jornada"/>  
                   Nova Jornada
                </button>

                <Modal isShowing={isShowing} hide={toggle} />
            </div>

        </div>



    )


}

export default Header
