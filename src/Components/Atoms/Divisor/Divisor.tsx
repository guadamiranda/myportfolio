import style from './divisor.module.scss'

interface divisorInterface {
    image: string
}

const Divisor: React.FC<divisorInterface> = ({image}) => {
    return(
        <div className={style.divisorContainer}>
            <img style={{height: '100%', width: '100%', backgroundImage: `url(${image})`, backgroundSize: 'cover'}}/>
        </div>
    )
}

export default Divisor