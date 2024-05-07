import style from './card.module.scss'
import imgage from '../../../../public/Assets/Images/balnearionogales.jpg'

interface CardInterface {
    img: string,
    title: string,
    description: string,
    isDark: boolean
}

const Card: React.FC<CardInterface> = ({img, title, description, isDark}) => {
    return(
        <div className={style.cardContainer} style={{backgroundColor: isDark? '#3e3e3e' : '#e1e0e0'}}>

        </div>
    )
}

export default Card