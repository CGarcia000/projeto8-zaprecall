import { useState } from "react";


export function OpenCard({
    objQuestion,
    order,
    setIsDone,
    setClasses,
}) {
    const [isTurned, setIsTurned] = useState(false)

    const [orderRes, setOrderResp, countCards, setCountCards] = order;

    function handleResponse(idRes) {
        objQuestion.state=idRes;
        setOrderResp([...orderRes, idRes]);
        setCountCards(countCards + 1);
        setIsDone(current => !current);
        setClasses('card');
    }

    return (
        <>
            {isTurned? (
                <>
                    <span>{objQuestion.res}</span>
                    <div className="buttons resps">
                        <button className="resp red" onClick={() => {handleResponse(1)}}>Não lembrei</button>
                        <button className="resp orange" onClick={() => {handleResponse(2)}}>Quase não lembrei</button>
                        <button className="resp green" onClick={() => {handleResponse(3)}}>
                            Zap! 
                            <ion-icon name="flash"></ion-icon>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span>{objQuestion.question}</span>
                    <div className="buttons turn">
                        <button onClick={() => {setIsTurned(current => !current)}}>
                            <ion-icon name="rocket-sharp"></ion-icon>
                        </button>
                    </div>
                </>
            )}
            
        </>
    );
}