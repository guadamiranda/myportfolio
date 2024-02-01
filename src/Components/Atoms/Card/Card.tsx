import style from './card.module.scss'
import img from '../../../../public/Assets/Images/balnearionogales.jpg'

const Card = () => {
    return(
        <div className={style.cardContainer}>
            <div className={style.cardContainer_container} style={{height: '100%', width: '100%', backgroundImage: `url(${img.src})`, backgroundSize: 'cover'}}>
                <div className={style.cardContainer_top}></div>
                <div className={style.cardContainer_bottom}></div>
            </div>
        </div>
    )
}

export default Card