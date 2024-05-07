'use client'

import ThemeSwitch from '@/Components/Atoms/ThemeSwitch/ThemeSwitch';
import PageNavigator from '@/Components/Atoms/Navigator/Navigator';
import { ThemeContext } from '@/contexts/themes';
import AboutMe from '../AboutMe/AboutMe';
import HomeComponent from '../Home/Home';
import style from './page.module.scss';
import { useContext } from 'react';
import Divisor from '@/Components/Atoms/Divisor/Divisor';
import image from '../../../../public/Assets/Images/WallpaperDog-20463686.jpg'
import Projects from '../Projects/Projects';



const Page = () => {
    const data = [{name: 'Home'}, {name: 'Sobre Mi'}, {name: 'Proyectos'}]
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)

    return(
        <div style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
            <ThemeSwitch changeState={toggleTheme} isDark={isDark}/>
            <PageNavigator options={data} color={theme.color}/>
            <HomeComponent isDark={isDark}/>
            <AboutMe isDark={isDark}/>  
            <Divisor image={image.src}/>
            <Projects isDark={isDark}/>
        </div>
    )
}

export default Page