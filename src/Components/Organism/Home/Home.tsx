'use client'

import lightWallpaper from '../../../../public/Assets/Images/sakuraSkills2.jpg'
import ImageContainer from '@/Components/Atoms/ImageContainer/ImageContainer'
import darkWallpaper from '../../../../public/Assets/Images/sakura2.jpg'
import rin from '../../../../public/Assets/Images/senbon.jpg'
import HomeTitle from '@/Components/Atoms/HomeTitle/HomeTitle'
import style from './home.module.scss'

interface HomeComponentInterface {
    isDark: boolean,
}

const HomeComponent: React.FC<HomeComponentInterface> = ({isDark}) => {
    const wallpaper = isDark? darkWallpaper.src : lightWallpaper.src 

    return(
        <div style={
            {height: '100vh', width: '100vw', backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover' }}>
            <div className={`${style.HomeComponentContainer_opacity}`}>
                <div className={`${style.HomeComponentContainer_body} d-flex align-items-center justify-content-center flex-column`}>
                    <ImageContainer img={rin.src}/>
                    <br></br>
                    <HomeTitle />
                    <div className={`${style.HomeComponentContainer_subTitule}`}>🌸 Frontend Developer 🌸</div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent