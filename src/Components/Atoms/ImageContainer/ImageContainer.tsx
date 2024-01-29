import style from './imageContainer.module.scss'

interface ImageContainerInterface {
    img: string
}

const ImageContainer: React.FC<ImageContainerInterface> = ({img}) =>{
    return(
        <div className={`${style.imageContainer} d-flex`}>
            <div style={{height: '100%', width: '100%', backgroundImage: `url(${img})`, backgroundSize: 'cover'}}></div>
        </div>
    )
}

export default ImageContainer