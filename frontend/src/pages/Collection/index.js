import React, {useEffect, useState} from 'react'
import Header from '../../Header'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

import {FaTrashAlt, FaArrowLeft} from 'react-icons/fa'

import './styles.css'

import Checked from '../../assets/checked.png'
import Unchecked from '../../assets/unchecked.png'

export default function Collection(){

    const history = useHistory()

    const prioridades = [
        {
            'text': "SEM PRIORIDADE",
            'color' : "gray"
        },
        {
            'text': "BAIXA",
            'color' : "#BD00FF"
        },
        {
            'text': "NORMAL",
            'color' : "#05ACE0"
        },
        {
            'text': "ALTA",
            'color' : "#FF9900"
        },
        {
            'text': "IMPORTANTE",
            'color' : "#FF3D00"
        }
    ]

    const [itens, setItens] = useState([])

    const [priority, setPriority] = useState(0)
    const [newItemText, setNewItemText] = useState("")

    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')
    const collectionId = localStorage.getItem('collectionId')
    const collectionTitle = localStorage.getItem('collectionTitle')
    const collectionColor = localStorage.getItem('collectionColor')

    useEffect(()=>{

        api.get(`collections/list/${collectionId}`)
        .then(response=>{
            setItens(response.data)
        })

        //const list = document.getElementById("list")
        //list.scrollTop = list.scrollHeight
    })


    async function voltar(){
        localStorage.removeItem('collectionId')
        localStorage.removeItem('collectionTitle')
        localStorage.removeItem('collectionColor')

        history.push('/profile')
    }


    //============ alterar estado (MARKED)=========

    async function setMarked(id){
        try{
            await api.put(`/collections/list/${collectionId}/item/${id}`)
        }
        catch(e){
            alert("ERRO NA ALTERAÇÃO")
        }
        
    }
    //============================================

    //--------- deletar item -----------

    async function deleteItem(id){
        try{
            await api.delete(`/collections/list/${collectionId}/item/${id}`)

            setItens(itens.filter(itens=> itens.id != id))
        }catch(er){
            alert("Erro ao deletar ITEM, tente novamente.")
        }
    }

    //---------------------------------

    //+++++++++++++++++ Adicionar item ++++++++++++++++++++
    async function addItem(e){
        e.preventDefault()
        const marked = false
        const text = newItemText
        
        try{
            await api.post(`/collections/list/${collectionId}`,{
                text,
                priority,
                marked
            })   

            //setPriority(0)
            setNewItemText("")
            
        }catch(e){
            alert('NÃO FOI POSSÍVEL ADICIONAR O ITEM \n Tente novamente!')
        }
        
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++

    return(
        <div className="collection-container">
            <Header userName={userName}></Header>

            <main>
                <div className="content">
                    <div  style={{backgroundColor: collectionColor}} className= "title-collection" >
                        <span onClick={voltar} className="arrow-back" >
                            <FaArrowLeft size={28} color="white" />
                            <p>Voltar</p>
                        </span>
                        <h1>
                            {collectionTitle!=null?collectionTitle:'[nome da coleção]'}
                        </h1>
                    </div>
                    <ul className="itens-list" id="list">

                        {itens.map(item=>(
                            <li>
                                <span onClick={()=>setMarked(item.id)} className="item-left">
                                    <img src={item.marked?Checked:Unchecked} style={{height:40}} alt="V"/>
                                    <p>{item.text}</p>
                                </span>
                                <p className="priority" style={{color:prioridades[item.priority].color}} >
                                    {prioridades[item.priority].text}
                                </p>
                                <FaTrashAlt onClick={()=>deleteItem(item.id)} className="trash" size={20} color="gray" />
                            </li>
                        ))}

            
                    </ul>
                    <form onSubmit={addItem}>
                        <input 
                            placeholder='Novo item'
                            value={newItemText}
                            onChange={(e)=>setNewItemText(e.target.value)}
                        />
                        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                            <option value={0}>sem prioridade</option>
                            <option value={1}>baixa</option>
                            <option value={2}>normal</option>
                            <option value={3}>alta</option>
                            <option value={4}>importante</option>
                        </select>
                        <button className="button" type='submit'>ADD</button>
                    </form>
                </div>
                
            </main>
        </div>
    )

}