// @ts-ignore
import myvideogame from '../../../../public/Assets/Images/myvideogamelist.PNG';
// @ts-ignore
import michivision from '../../../../public/Assets/Images/michivision2.PNG';
import balneario from '../../../../public/Assets/Images/balnearioapp.jpg';
// @ts-ignore
import pokedex from '../../../../public/Assets/Images/pokedex2.PNG';
import OtherTitule from "../../Atoms/OtherTitle/OtherTitle";
import Card from "@/Components/Atoms/Card/Card";
import style from "./projects.module.scss";

interface ProjectsInterface {
  isDark: boolean;
}

const allProjects = [
  {
    title: "Michivisión",
    state: "Finalizado",
    description:
      "Aplicación para ver de forma aleatoria las más tiernas imágenes de michis.",
    img: michivision.src,
    repository: 'https://github.com/guadamiranda/apicat',
    url: 'https://michivision.netlify.app/',
    tools: ["HTML", "SCSS", "TypeScript" , "React"]
  },
  {
    title: "Pokedex Virtual",
    state: "Finalizado",
    description:
      "Aplicación para buscar Pokemon desde una pokedex.",
    img: pokedex.src,
    repository: 'https://github.com/guadamiranda/pokedex',
    url: 'https://portfoliopokedex.netlify.app',
    tools: ["HTML", "SCSS", "TypeScript", "React"]
  },
  {
    title: "Camping los Nogales APP",
    state: "Finalizado",
    description:
      "Aplicación para el Camping Los Nogales para registrar estadías.",
    img: balneario.src,
    repository: 'https://github.com/guadamiranda/balnearioappfront',
    url: '',
    tools: ["HTML", "SCSS", "TypeScript", "React"]
  },
  {
    title: "GameAtlas (WIP)",
    state: "En Proceso",
    description:
      "Aplicación para listar los videojuegos que ya has terminado.",
    img: myvideogame.src,
    repository: 'https://github.com/guadamiranda/videogamelistproject',
    url: '',
    tools: ["HTML", "CSS", "TypeScript", "React", "Node", "Express"]
  },
];

const Projects: React.FC<ProjectsInterface> = ({isDark }) => {
  return (
    <div
      className={`${style.projectsContainer} d-flex align-items-center justify-content-center flex-column`}
    >
      <OtherTitule />
      <div
        className={`${style.projectsContainer_cardsContainer} d-flex align-items-center justify-content-center flex-wrap gap-3 mb-3`}
      >
        {allProjects.map((project, index) => (
            <Card
            key={index}
            isDark={isDark}
            img={project.img}
            title={project.title}
            description={project.description}
            state={project.state}
            url={project.url}
            repository={project.repository}
            tools={project.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
