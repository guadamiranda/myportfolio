'use client'

import lightWallpaper from '../../../../public/Assets/Images/sakuraSkills2.jpg';
import ImageContainer from '@/Components/Atoms/ImageContainer/ImageContainer';
import darkWallpaper from '../../../../public/Assets/Images/sakura2.jpg';
import HomeTitle from '@/Components/Atoms/HomeTitle/HomeTitle';
import rin from '../../../../public/Assets/Images/senbon.jpg';
import { FaLinkedin } from "react-icons/fa";
import style from './home.module.scss';

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
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/guadalupe-miranda-7b3599267/")} className={style.HomeComponentContainer_linkedInIcon}/>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent