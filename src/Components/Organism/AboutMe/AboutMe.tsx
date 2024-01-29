import InfiniteScroll from '@/Components/Atoms/InfiniteScroll/InfiniteScroll'
import style from './aboutMe.module.scss'

interface AboutMeInterface {
    isDark: boolean
}

const AboutMe: React.FC<AboutMeInterface> = ({isDark}) => {
    
    return(
        <div className={`${style.aboutMeContainer} d-flex justify-content-center align-items-center`}>
            <InfiniteScroll isDark={isDark}/>
        </div>
    )
}

export default AboutMe