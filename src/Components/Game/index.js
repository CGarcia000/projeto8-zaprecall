import { Card } from "./Card/";
import { Footer } from "./Footer";
import { Header } from "./Header";


import './style.css'

const questions = [
    {
        question: 'O que é JSX',
        res: 'Uma extensão de linguagem do JavaScript'
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
]

// const question = {
//     // o id na carta entra no index do map + 1
//     text: '',
//     res: '',
//     opened: false,    
//     turned: false,
//     status: '',
// }
// status: (notRemember | almost | zap),

// todo - footer itens concluidos >> uma array que recebe os status na ordem


export function Game () {
    return (
        <>
            <Header />

            {/* <Card question={question}/> */}
            <Card />

            {/* map com as cards */}

            <Footer />
        </>
    );
}