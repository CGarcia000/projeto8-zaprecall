import { useState } from "react";


export function OpenCard() {
    const [isTurned, setIsTurned] = useState(false)

    // if (!isTurned) setIsTurned(current => !current); //comentar dps

    return (
        <>
            {isTurned? (
                <>
                    <span>Teste</span>
                    <div className="buttons resps">
                        <button className="resp red">Não lembrei</button>
                        <button className="resp orange">Quase não lembrei</button>
                        <button className="resp green">
                            Zap! 
                            <ion-icon name="flash"></ion-icon>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span>Teste</span>
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