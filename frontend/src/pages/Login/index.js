import React, {useState} from 'react'

import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import { Modal } from '@material-ui/core';

import ModalContent from '../../ModalsContent'


import api from '../../services/api'

import './styles.css'

import logo from '../../assets/logo.png'
import livroImg from '../../assets/livroImg.png'
import usersImg from '../../assets/users.png'



export default function Login(){

    const [show, setShow] = useState(false);

    function handleClose(e){
        setShow(false);
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true);
    }

    

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        history.push('/profile')
    }

    return(
        
        <div className="login-container">
            <Modal
                open={show}
                onClose={handleClose}
                className="Modal"
            >
                <ModalContent
                    title="CADASTRAR"
                    logo={usersImg}
                    btnColor1="#561212"
                    functionBtn1={handleClose}
                    btnColor2="#123C4E"
                    functionBtn2={()=>{alert("OK")}}
                >
                    <input placeholder='Nome do usuário'/>
                    <input placeholder='Email'/>
                </ModalContent>
            </Modal>


            <section className="left-container">
                <img className="logoImg" src={logo} alt=""/>   
                <p>Bem vindo ao Listing, o seu aplicativo para te manter organizado.<br/>Faça login para acessar seus registros!</p>
                <img className="livroImg" src={livroImg} alt=""/>
            </section>
            <section className="right-container">
                <h1>LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <input placeholder='Nome do usuário'/>
                    <input placeholder='Senha'/>
                    <button className="button" type='submit'>ENTRAR</button>

                    <span className="link" onClick={handleShow} >
                        <FiLogIn size={24} color="black" />
                        Não tenho cadastro
                    </span>
                </form>
            </section>

        </div>
    )
}