import { useState } from "react"
import { InitialPage } from "./InitialPage";
import { Game } from "./Game";


export default function App() {
    const [isStarted, setStarted] = useState(false);

    return (
        <>
        {isStarted ? <Game /> : <InitialPage setStarted={setStarted}/>}
        </>
    )
}