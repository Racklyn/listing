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
    //para Modal------------------------------
    const [show, setShow] = useState(false);

    function handleClose(e){
        setShow(false);
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true);
    }
    //----------------------------------------------
    

    const [id, setId] = useState('')
    const [name, setName] = useState('')

    //dados do novo usuário
    const [newName, setNewName] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        
        try{
            await api.post('sessions',{id, name})

            localStorage.setItem('userName', name)
            localStorage.setItem('userId', id)

            history.push('/profile')
        }catch(e){
            alert("FALHA NO LOGIN! \n Tente novamente")
        }

    }

    //+++++++++++++++ ADD USER ++++++++++++++++++++

    async function addUser(e){
        e.preventDefault()
        try{
            const name = newName
            const response = await api.post('/users/new',{name, email})

            alert(`Seu ID: ${response.data.id}`)

            setId(response.data.id)
            setName(newName)

            handleClose()
        }catch(e){
            alert("ERRO AO CRIAR USUÁRIO \n Tente novamente!")
        }

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
                    functionBtn2={addUser}
                >
                    <input value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Nome do usuário'/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
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
                    <input 
                        value={name} 
                        placeholder='Nome do usuário'
                        onChange={e=>setName(e.target.value)}
                    />
                    <input 
                        value={id} 
                        placeholder='Senha'
                        onChange={e=>setId(e.target.value)}
                    />
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