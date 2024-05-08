import style from './infiniteScroll.module.scss'
import SKILLS from '../../../constants/SKILLS'

interface InfiniteScrollInterface {
    isDark: boolean
}

const InfiniteScroll: React.FC<InfiniteScrollInterface> = ({isDark}) => {
    const whiteGradiant = 'radial-gradient(circle, rgba(0,0,0,0) 63%, rgba(255,255,255,1) 100%)'
    const blackGradiant = 'radial-gradient(circle, rgba(0,0,0,0) 63%, #100c0c 100%)'

    return(
        <div className={`${style.infiniteScrollContainer} d-flex`}>
            <div className={`${style.infiniteScrollContainer_opacity} d-flex`} 
                style={{background: isDark ? blackGradiant : whiteGradiant}} >
            </div>
            <div className={`${style.infiniteScrollContainer_listContainer} d-flex gap-5 `}>
                    {SKILLS.map((skills, index) => <div className={`${style.infiniteScrollContainer_items} d-flex align-items-center`} key={index}>{skills}</div>)}
             </div>
        </div>
    )
}

export default InfiniteScroll