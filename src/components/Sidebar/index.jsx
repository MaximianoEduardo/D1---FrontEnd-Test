import React from 'react'
import logoD1 from '../../assets/images/logotipo-branco.png'
import SidebarItens from '../SidebarItens'
import './index.css'


function SideBar(){


    return(

        <div className="sideBar">

            <img src={logoD1} alt="Logo D1"/>


            <div className="sideBarIcons">
                
                <SidebarItens />
                

            </div>

        </div>



    )


}

export default SideBar
