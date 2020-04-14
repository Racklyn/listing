import React, {useEffect, useState} from 'react'
import Header from '../../Header'
import api from '../../services/api'

import {FaTrashAlt} from 'react-icons/fa'

import './styles.css'

import Checked from '../../assets/checked.png'
import Unchecked from '../../assets/unchecked.png'

export default function Collection(){

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

    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')
    const collectionId = localStorage.getItem('collectionId')
    const collectionTitle = localStorage.getItem('collectionTitle')

    useEffect(()=>{

        api.get(`collections/list/${collectionId}`)
        .then(response=>{
            setItens(response.data)
        })

    })

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

    return(
        <div className="collection-container">
            <Header userName={userName}></Header>

            <main>
                <div className="content">
                    <h1>{collectionTitle!=null?collectionTitle:'[nome da coleção]'}</h1>
                    <ul className="itens-list">

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
                    <form>
                        <input placeholder='Novo item' />
                        <select>
                            <option>sem priopidade</option>
                            <option>baixa</option>
                            <option>normal</option>
                            <option>alta</option>
                            <option>importante</option>
                        </select>
                        <button className="button">ADD</button>
                    </form>
                </div>
                
            </main>
        </div>
    )
}