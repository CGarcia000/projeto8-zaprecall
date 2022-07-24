import { useState } from "react";

import { OpenCard } from "./OpenCard";
import { ClosedCard } from "./ClosedCard";

import './style.css'

export function Card({
    question
}) {
    const [isOpen, setIsOpen] = useState(false) // state da card se já foi respondida
    const [isDone, setIsDone] = useState(false) // state da card se já foi respondida

    // const questionJSX = !question.turned ? (
    //     <div className="card">
    //         <span>{question.text}</span>
    //         {/* icon */}
    //     </div>
    // ) : (
    //     <div className="card turned">
    //         <span>{question.res}</span>
    //         <button className="red">Não lembrei</button>
    //         <button className="orange">Quase não lembrei</button>
    //         <button className="green">Zap!</button>
    //     </div>
    // );

    return (
        <div className="card">
            {isOpen ? <OpenCard /> : <ClosedCard isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
}