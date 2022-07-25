import { useState } from "react";

import { OpenCard } from "./OpenCard";
import { ClosedCard } from "./ClosedCard";

import './style.css'

export function Card({
    index,
    objQuestion,
    order,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [classes, setClasses] = useState('card');
    

    const notDone = isOpen ? (
        <OpenCard 
            objQuestion={objQuestion}
            order={order} 
            setIsDone={setIsDone}
            setClasses={setClasses}
        />
    ): (
        <ClosedCard 
            index={index} 
            stateQuestion={objQuestion.state}
            setIsOpen={setIsOpen} 
            setClasses={setClasses}
            isDone={isDone}
        />
    )
    
    const done = <ClosedCard 
        index={index} 
        stateQuestion={objQuestion.state}
        setIsOpen={setIsOpen} 
        setClasses={setClasses}
        isDone={isDone}
    />


    return (
        <div className={classes}>
            {isDone ? done : notDone}
        </div>
    );
}