import style from './card.module.scss';
import Pin from '../Pin/Pin';

interface CardInterface {
    img: string,
    title: string,
    description: string,
    isDark: boolean,
    state: string,
    url: string,
    repository: string,
    tools: any
}

const Card: React.FC<CardInterface> = ({img, title, description, isDark, url, repository, tools, state }) => {

    return(
        <div className={style.cardContainer} style={{backgroundColor: isDark? '#3e3e3e' : '#e1e0e0'}}>
            <div className={style.cardContainer__head} >
                <div style={{height: '100%', width: '100%', backgroundImage: `url(${img})`, backgroundSize: 'cover', display: 'flex', alignItems: 'end', justifyContent: 'flex-end'}}>
                    {tools.map((tool:string, index:number) => <Pin key={index} title={tool}/>)}
                </div>
            </div>
            <div className={style.cardContainer__text}>
                <div>
                    <div className={style.cardContainer__text__title}>{title}<span className={style.cardContainer__text__state}>{state}</span></div>
                    <div className={style.cardContainer__text__description}>{description}</div>
                </div>
                <div>
                    <div className={style.cardContainer__text__buttonContainer}>
                        {repository && <button onClick={() => window.open(repository, '_blink')} className={style.cardContainer__button}>Repositorio</button>}
                        {url && <button onClick={() => window.open(url, '_blink')} className={style.cardContainer__button}>Demo</button>}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card