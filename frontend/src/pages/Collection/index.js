import React, {useState} from 'react'
import Header from '../../Header'

import {FaTrashAlt} from 'react-icons/fa'

import './styles.css'

import Checked from '../../assets/checked.png'
import Unchecked from '../../assets/unchecked.png'

export default function Collection(){

    const [itens, setItens] = useState([Checked,Unchecked, Checked, Unchecked])

    return(
        <div className="collection-container">
            <Header userName='Francisco Racklyn'></Header>

            <main>
                <div className="content">
                    <h1>Nome da coleção</h1>
                    <ul className="itens-list">

                        {itens.map(item=>(
                            <li>
                                <span className="item-left">
                                    <img src={item} style={{height:40}} alt="V"/>
                                    <p>Item da coleção 1</p>
                                </span>
                                <p className="priority" style={{color:"red"}} >IMPORTANTE</p>
                                <FaTrashAlt className="trash" size={20} color="gray" />
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