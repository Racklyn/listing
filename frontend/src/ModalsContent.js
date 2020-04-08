import React from 'react';

import './global.css'

export default function ModalsContent(props){

    return(
        <div className="Modals-Content" style={{backgroundColor:props.bgColor}}>
            <header>
                <h1>{props.title}</h1>
                <img src={props.logo} style={{height:70}} alt="imagem"/>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <button 
                    style={{backgroundColor:props.btnColor1}}
                    className="button"
                    onClick={props.functionBtn1}
                >Voltar</button>
                <button
                    style={{backgroundColor:props.btnColor2}}
                    className="button"
                    onClick={props.functionBtn2}
                >Confirmar</button>
            </footer>
        </div>
    );
};