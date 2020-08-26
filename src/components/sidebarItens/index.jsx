import React from 'react'
import Tooltip from 'react-simple-tooltip'
import grafico from '../../assets/icons/chart-pie.svg'
import rocket from '../../assets/icons/rocket.svg'
import amigos from '../../assets/icons/user-friends.svg'
import ccm from '../../assets/icons/ccm-cloud.svg'
import external from '../../assets/icons/external-link-alt-solid.svg'
import admin from '../../assets/icons/gem.svg'
import helpDesk from '../../assets/icons/tools.svg'
import switchAcc from '../../assets/icons/exchange-alt.svg'
import logout from  '../../assets/icons/sign-out-alt.svg'
import './index.css'

function SidebarItens() {

    return(

        <>

            <div className="upIcons">

                <Tooltip 
                        content="Analises"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={grafico} alt="Analises"/>
                        </div>

                </Tooltip>

                <Tooltip 
                        content="Jornadas"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={rocket} alt="Jornadas"/>
                        </div>

                </Tooltip>
                <Tooltip 
                        content="Clientes"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={amigos} alt="Clientes"/>
                        </div>

                </Tooltip>
                <Tooltip 
                        content="CCM Cloud"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={ccm} alt="CCM Cloud"/>
                        </div>

                </Tooltip>

                <span className='divider'></span>

                <Tooltip 
                        content="Versao 01"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={external} alt="Versao 01"/>
                        </div>

                </Tooltip>


            </div>
            

            <div className="downIcons">

                <Tooltip 
                        content="Administraçao"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={admin} alt="Administraçao"/>
                        </div>

                </Tooltip>
                <Tooltip 
                        content="Help Desk"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={helpDesk} alt="Help Desk"/>
                        </div>

                </Tooltip>
                <Tooltip 
                        content="Trocar Conta"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={switchAcc} alt="Trocar Conta"/>
                        </div>

                </Tooltip>


                <Tooltip 
                        content="Sair"
                        color='#9196AB'
                        background='#fff'
                        placement='right'
                        border='none'
                        fontSize='13'
                        padding={9}
                        radius={7}
                        arrow={7}
                >

                        <div className="icons">
                            <img src={logout} alt="Sair"/>
                        </div>

                </Tooltip>

            </div>



        </>

    )


}

export default SidebarItens