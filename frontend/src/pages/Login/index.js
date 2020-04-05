import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
//import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/logo.png'
import livroImg from '../../assets/livroImg.png'

export default function Login(){

    /* PARTE USADA NO MODAL
    const [show, setShow] = useState(false);

    function handleClose(e){
        setShow(false);
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true);
    }
    <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  */

    return(
        
        <div className="login-container">
            
            <section className="left-container">
                <img className="logoImg" src={logo} alt=""/>   
                <p>Bem vindo ao Listing, o seu aplicativo para te manter organizado.<br/>Faça login para acessar seus registros!</p>
                <img className="livroImg" src={livroImg} alt=""/>
            </section>
            <section className="right-container">
                <h1>LOGIN</h1>
                <form>
                    <input placeholder='Nome do usuário'/>
                    <input placeholder='Senha'/>
                    <button className="button" type='submit'>ENTRAR</button>

                    <a className="link" href='#'>
                        <FiLogIn size={24} color="black" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

        </div>
    )
}