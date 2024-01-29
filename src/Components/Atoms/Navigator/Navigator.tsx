import { PiFlowerFill } from "react-icons/pi";
import style from './Navigator.module.scss'
import React from "react";

type optionsObject = {
    name: string
}

interface PageNavigatorInterface {
    options: Array<optionsObject>
    color: string
}

const PageNavigator: React.FC<PageNavigatorInterface> = ({options, color}) => {
    return(
        <div className={style.NavigatorContainer}>
            {options.map((option, index) => (
                <div className={`${style.NavigatorContainer_options} d-flex flex-row align-items-center`} key={index}>
                    <div className={style.NavigatorContainer_line} style={{backgroundColor: color}}></div>
                    <div className={`${style.NavigatorContainer_icon} d-flex flex-row align-items-center`}>
                        <PiFlowerFill />
                    </div>
                    <div>{option.name}</div>
                </div>
            ))}
        </div>
    )
}

export default PageNavigator