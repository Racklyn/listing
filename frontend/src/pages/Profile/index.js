import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'
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

    const history = useHistory()
    
    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')

    const [collections, setCollections] = useState([])

    //contagem de itens em cada uma das coleções
    const [countItens,setCountItens] = useState([])

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: userId
            }
        }).then(response=>{
            setCollections(response.data)
            response.data.map(collection=>{
                api.get(`collections/list/${collection.id}`)
                .then(col=>{
                    setCountItens(
                        prevState =>{
                            const list  = prevState.concat(col.data.length)
                            return list
                        }
                    )     
                }) 
            })
        })   
    },[userId])




    //para abrir tele de criar nova coleção___________________________
    const [show, setShow] = useState(false);


    function handleClose(e){
        setShow(false);
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true);
    }
    //________________________________________________________________


    //(((((((((((((((((  ABRIR COLEÇÃO   )))))))))))))))))

    async function handleCollection(id, title){
        
        //e.preventDefault()
        
        try{

            localStorage.setItem('collectionId', id)
            localStorage.setItem('collectionTitle', title)

            history.push('/Collection')
        }catch(e){
            alert("FALHA AO ABRIR A COLEÇÃO! \n Tente novamente")
        }
    }

    //(((((((((((((((((((((((((())))))))))))))))))))))))))


    //----------------DELETAR COLEÇÃO--------------
    async function deleteCollection(id){
        try{
            await api.delete(`collections/${id}`,{
                headers:{
                    Authorization: userId
                }
            }) //delentando lista com id e passando id do user

            //a lista de coleções terá o valor dela filtrado o caso com o id que foi apagado
            setCollections(collections.filter(collections=> collections.id != id))
        }catch(er){
            alert("Erro ao deletar coleção, tente novamente.")
        }
    }
    //---------------------------------------------


    return(
        
        <div className="profile-container">

            <Header userName= {userName}>
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
                    
                    {collections.map((collection, index)=>(
                        <li 
                            key={collection.id}
                            style={{backgroundColor:collection.color}}
                        >
                            <div onClick={()=>handleCollection(collection.id, collection.title)} className="main-card">
                                <h2>{collection.title}</h2>
                                <p>{collection.description}</p>
                            </div>
                            <div className="bottom-card">
                                <p>
                                    {countItens[index]}
                                    &nbsp; item(s)
                                </p>
                                <FaTrashAlt onClick={()=>deleteCollection(collection.id)} className="trash" size={22} color="#111" />
                            </div>
                        </li>
                    ))}

                    
                </ul>
            </main>
        </div>
    )
}