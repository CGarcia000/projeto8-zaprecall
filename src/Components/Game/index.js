import { Footer } from "./Footer";
import { Header } from "./Header";
import { Card } from "./Card";

import './style.css'

// const question = {
//     // o id na carta entra no index do map + 1
//     text: '',
//     res: '',
//     turned: false,
//     status: '',
// }
// status: (notRemember | almost | zap),

// todo - footer itens concluidos >> uma array que recebe os status na ordem


export function Game () {
    return (
        <>
            <Header />

            <Card question={question}/>

            {/* map com as cards */}

            <Footer />
        </>
    );
}