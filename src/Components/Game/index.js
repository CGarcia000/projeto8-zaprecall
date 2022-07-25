import { useState } from "react";
import { Card } from "./Card/";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import { Header } from "./Header";

import './style.css'

const questions = [
    {
        question: 'O que é JSX',
        res: 'Uma extensão de linguagem do JavaScript',
    },
    {
        question: 'O React é __',
        res: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: 'Componentes devem iniciar com __',
        res: 'letra maiúscula'
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        res: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda __',
        res: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Usamos o npm para __',
        res: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para __',
        res: 'passar diferentes informações para componentes '
    },
    {
        question: 'Usamos estado (state) para __ ',
        res: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
].sort(() => 0.5 - Math.random());

export function Game () {

    const [orderRes, setOrderResp] = useState([]);
    const [countCards, setCountCards] = useState(0);

    return (
        <>
            <Header />

            <Cards>
                {questions.map((q, i) => <Card 
                        key={i} 
                        index={i+1} 
                        objQuestion={q}
                        order={[orderRes, setOrderResp, countCards, setCountCards]} 
                    />)}
            </Cards>

            <Footer orderRes={orderRes} countCards={countCards} numCards={questions.length}/>
        </>
    );
}