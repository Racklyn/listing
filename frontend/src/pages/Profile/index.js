import React, {useState} from 'react'
import Header from '../../Header'
import {FaPlus, FaTrashAlt} from 'react-icons/fa'

import './styles.css'

export default function Profile(){

    const [collections, setCollections] =  
    useState(["#5BB2C6", "#A35BC6", "#E0618F","#DD9E54","#D3C438","#D3C438","#D3C438","#D3C438"])

    return(
        <div className="profile-container">
            <Header userName='Francisco Racklyn'>
                <button className='button' >
                    <FaPlus size={26} color="#D8D8D8" />
                </button>
            </Header>

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