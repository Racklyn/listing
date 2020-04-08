import React, {useState} from 'react'
import Header from '../../Header'
import {FaPlus, FaTrashAlt} from 'react-icons/fa'
//import ColorPicker from 'rc-color-picker';
//import {ColorPicker} from '@progress/kendo-react-inputs'
//import ColorPicker from 'rc-color-picker'
//import {ChromePicker, CirclePicker, CompactPicker, SwatchesPicker, SketchPicker } from 'react-color';

import { Modal } from '@material-ui/core';

import ModalContent from '../../ModalsContent'

import listImg from '../../assets/list.png'

import './styles.css'

export default function Profile(){

    const [show, setShow] = useState(false);


    function handleClose(e){
        setShow(false);
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true);
    }


    const [collections, setCollections] =  
    useState(["#5BB2C6", "#A35BC6", "#E0618F","#DD9E54","#D3C438","#D3C438","#D3C438","#D3C438"])

    /*
    const [display, setDisplay] = useState(false);
    
      function handleClick(){
        setDisplay(!display)
      };
    
      function handleClose(){
        setDisplay(false)
      };


      <button className="colorPickerBtn"  onClick={handleClick }></button>
                        { display ? <div className="popover">
                        <div className="cover" onClick={handleClose }/>
                            <SwatchesPicker className="colorPicker"/>
                        </div> : null }
      */
    return(
        
        <div className="profile-container">

            <Header userName='Francisco Racklyn'>
                <button onClick={handleShow} className='button' >
                    <FaPlus size={26} color="#D8D8D8" />
                </button>
            </Header>

            <Modal
                open={show}
                onClose={handleClose}
                className="Modal"
            >
                <ModalContent
                    title="NOVA COLEÇÃO"
                    logo={listImg}
                    bgColor="#455A64"
                    btnColor1="#561212"
                    functionBtn1={handleClose}
                    btnColor2="#123C4E"
                    functionBtn2={()=>{alert("OK")}}
                >
                    <input placeholder='Nome da coleção'/>
                    <textarea placeholder='Descrição da coleção'/>
                    <div className="color-content">
                        
                        <p>Cor da coleção</p>
                        <input className="colorPicker" type="color"/>
                    </div>

                </ModalContent>
            </Modal>

            <main>
                <h1>COLEÇÕES</h1>
                
                <ul className="list">
                    
                    {collections.map(collection=>(
                        <li style={{backgroundColor:collection}}>
                            <h2>Coleção 1</h2>
                            <p>Essa coleção é sobre alguma coisa não muito importante
                            Essa coleção é sobre alguma coisa não muito importante
                            
                            </p>

                            <div>
                                <p>15 itens</p>
                                <FaTrashAlt className="trash" size={22} color="#111" />
                            </div>
                        </li>
                    ))}

                    
                </ul>
            </main>
        </div>
    )
}