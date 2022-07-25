import { IconRes } from '../Footer';


export function ClosedCard({
    index,
    stateQuestion,
    setIsOpen,
    setClasses,
    isDone,
}) {
    function handleCard() {
        setClasses(current => current  + ' open');
        setIsOpen(current => !current);
    }

    let classSpan;
    if (isDone) {
        switch (stateQuestion){
            case 1:
                classSpan = 'red-span';
                break;
            case 2:
                classSpan = 'orange-span';
                break;
            case 3:
                classSpan = 'green-span';
                break;
            default:
                classSpan = '';
        }
    }

    return (
        <>
            <span className={classSpan}>Pergunta {index}</span>
            
                {isDone ? <IconRes idRes={stateQuestion}/> 
                : (
                    <button onClick={handleCard}>
                        <ion-icon name="play-outline"></ion-icon>
                    </button>
                )}
        </>
    );
}
