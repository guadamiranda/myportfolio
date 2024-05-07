'use client'

import image from '../../../../public/Assets/Images/WallpaperDog-20463686.jpg';
import ThemeSwitch from '@/Components/Atoms/ThemeSwitch/ThemeSwitch';
import PageNavigator from '@/Components/Atoms/Navigator/Navigator';
import Divisor from '@/Components/Atoms/Divisor/Divisor';
import { ThemeContext } from '@/contexts/themes';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import HomeComponent from '../Home/Home';
import { useContext } from 'react';

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