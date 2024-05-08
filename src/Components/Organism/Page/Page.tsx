"use client";

import image from "../../../../public/Assets/Images/WallpaperDog-20463686.jpg";
import ThemeSwitch from "@/Components/Atoms/ThemeSwitch/ThemeSwitch";
import PageNavigator from "@/Components/Atoms/Navigator/Navigator";
import Divisor from "@/Components/Atoms/Divisor/Divisor";
import { ThemeContext } from "@/contexts/themes";
import Projects from "../Projects/Projects";
import { useContext, useRef } from "react";
import AboutMe from "../AboutMe/AboutMe";
import HomeComponent from "../Home/Home";

const Page = () => {
  const data = [{ name: "Home" }, { name: "Sobre Mi" }, { name: "Proyectos" }];
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <ThemeSwitch changeState={toggleTheme} isDark={isDark} />
      <PageNavigator homeRef={homeRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} options={data} color={theme.color} />
      <div ref={homeRef}><HomeComponent  isDark={isDark} /></div>
      <div ref={aboutMeRef}><AboutMe isDark={isDark} /></div>
      <Divisor image={image.src} />
      <div ref={skillsRef}><Projects isDark={isDark} /></div>
    </div>
  );
};

export default Page;
