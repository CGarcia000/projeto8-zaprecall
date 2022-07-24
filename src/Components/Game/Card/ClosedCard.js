


export function ClosedCard({
    setIsOpen
}) {
    function handleCard(e) {
        const card = e.currentTarget.parentElement;
        card.classList.add('open');

        setIsOpen(current => !current);
    }

    return (
        <>
            <span>Pergunta {1}</span>
            <button onClick={handleCard}>
                <ion-icon name="play-outline"></ion-icon>
            </button>
        </>
    );
}
