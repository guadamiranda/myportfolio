import InfiniteScroll from '@/Components/Atoms/InfiniteScroll/InfiniteScroll'
import ImageContainer from '@/Components/Atoms/ImageContainer/ImageContainer'
import rin from '../../../../public/Assets/Images/rin2.PNG';
import { SiGamebanana } from "react-icons/si";
import { PiMedalLight } from "react-icons/pi";
import style from './aboutMe.module.scss';
import { CiStar } from "react-icons/ci";

interface AboutMeInterface {
    isDark: boolean
}

const AboutMe: React.FC<AboutMeInterface> = ({isDark}) => {
    
    return(
        <div className={`${style.aboutMeContainer} d-flex justify-content-center align-items-center flex-column`}>
            <div className={`d-flex flex-row align-items-center gap-5`}>
                <ImageContainer img={rin.src}/>
                <div className={`${style.aboutMeContainer_text} d-flex justify-content-center flex-column gap-3`}>
                    <div className={`${style.aboutMeContainer_texts} d-flex justify-content-evenly align-items-center flex-row gap-3`}>
                        <div className={`${style.aboutMeContainer_textContainer} d-flex justify-content-center align-items-center flex-column`}>
                            <span className={style.aboutMeContainer_icon}><b><PiMedalLight /></b></span>
                            <span><b>Experiencia</b></span>
                            <span className={style.aboutMeContainer_subtitule}>1 + año</span>
                        </div>
                        <div className={`${style.aboutMeContainer_textContainer} d-flex justify-content-center align-items-center flex-column`}>
                            <span className={style.aboutMeContainer_icon}><CiStar /></span>
                            <span>Completados</span>
                            <span className={style.aboutMeContainer_subtitule}>1 + proyecto</span>
                        </div>
                        <div className={`${style.aboutMeContainer_textContainer} d-flex justify-content-center align-items-center flex-column`}>
                            <span className={style.aboutMeContainer_icon}><SiGamebanana /></span>
                            <span><b>CV</b></span>
                            <span className={style.aboutMeContainer_subtitule}>Google Drive</span>
                        </div>
                    </div>
                    <div className={`${style.aboutMeContainer_textAboutMe}`}>
                        ¡Hola! Soy Guadalupe, <b>Desarrolladora Web Frontend</b> apasionada por la creación de experiencias digitales cautivadoras, siempre 
                        con el cuidado de combinar la estética visual con la funcionalidad excepcional.
                    </div>
                </div>
            </div>
            <br/>
            <InfiniteScroll isDark={isDark}/>
        </div>
    )
}

export default AboutMe