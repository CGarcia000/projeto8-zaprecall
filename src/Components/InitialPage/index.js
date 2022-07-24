import zap from '../../assets/img/zap.svg'

import './style.css'


export function InitialPage({ setStarted }) {
    return (
        <div className="title">
            <img src={zap} alt='Logo ZapRecall' />
            <h1>ZapRecall</h1>
            <button onClick={() => {setStarted(current => !current)}}>Iniciar Recall!</button>
        </div>
    );
}