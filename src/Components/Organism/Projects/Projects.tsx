import Card from '@/Components/Atoms/Card/Card'
import style from './projects.module.scss'
import OtherTitule from '../../Atoms/OtherTitle/OtherTitle'

const Projects = () => {
    return(
        <div className={`${style.projectsContainer} d-flex align-items-center justify-content-center flex-column`}>
            <OtherTitule />
            <div className={`${style.projectsContainer_cardsContainer} d-flex align-items-center justify-content-center flex-wrap gap-3`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Projects