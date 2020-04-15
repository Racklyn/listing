import React from 'react';
import {FiLogOut} from 'react-icons/fi'
import {useHistory} from 'react-router-dom'
import logo from './assets/logo.png'

import './global.css'

export default function Header(props){

    const history = useHistory()

    async function logOut(e){
        e.preventDefault()
        //aqui vamos apagar os dados do login salvos no localStorage 
        localStorage.clear()

        history.push('/')
    }

    return(
        <header className="header">
            <img src={logo} alt="Listing"/>
            <div>
                {props.children}
                <span className="userName">{props.userName}</span>
                <span className="logOutLink" onClick={logOut}>
                    <FiLogOut size={28} color="black" />
                </span> 
            </div>
        </header>
    );
};