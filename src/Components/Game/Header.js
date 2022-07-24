import zap from '../../assets/img/zap.svg'

export function Header () {
    return (
        <div id='header'>
            <img src={zap} alt='Logo Zap Recall' />
            <h1>ZapRecall</h1>
        </div>
    );
}