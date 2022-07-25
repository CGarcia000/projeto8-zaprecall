let gameEnd = false;

export function Footer ({
    orderRes,
    countCards,
    numCards,
}) {
    let result = '';
    function handleGameEnd() {
        gameEnd = true;
        if (orderRes.includes(1)) {
            result = (
                <>
                    <p>😥 Putz...</p>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            );
            return;
        }
        result = (
            <>
                <p>🥳 Parabéns</p>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        );
    }

    if (countCards === numCards) handleGameEnd();

    return (
        <div id="footer">
            {gameEnd ? (
                <div id="result">
                    {result}
                </div>
            ) : (
                <></>
            )}

            <div id="count-questions">{countCards}/{numCards} concluídos</div>
            <div id="resps">
                {orderRes.map((res, i) => <IconRes key={i} idRes={res} />)}
            </div>
        </div>
    );
}

export function IconRes ({
    idRes
}) {
    let name;
    let color;
    switch (idRes) {
        case 1:
            name = "close-circle";
            color = '#ff3030'
            break;
        case 2:
            name = "help-circle";
            color = '#ff922E';

            break;
        case 3:
            name = "checkmark-circle";
            color = '#2fbe34';
            break;
        default:
            break;
    }

    return (
        <ion-icon name={name} style={{color: color}}></ion-icon>
    );
}