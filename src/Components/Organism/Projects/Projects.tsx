import michivision from '../../../../public/Assets/Images/michivision2.PNG';
import pokedex from '../../../../public/Assets/Images/pokedex2.PNG';
import balneario from '../../../../public/Assets/Images/balnearioapp.jpg';
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
    title: "Pokedex",
    state: "Finalizado",
    description:
      "Aplicación para buscar Pokemon desde una pokedex.",
    img: pokedex.src,
    repository: 'https://github.com/guadamiranda/pokedex',
    url: '',
    tools: ["HTML", "SCSS", "TypeScript", "React"]
  },
  {
    title: "Balneario APP",
    state: "Finalizado",
    description:
      "Aplicación para el Camping Los Nogales para registrar estadías.",
    img: balneario.src,
    repository: 'https://github.com/guadamiranda/balnearioappfront',
    url: '',
    tools: ["HTML", "SCSS", "TypeScript", "React"]
  },
];

const Projects: React.FC<ProjectsInterface> = ({ isDark }) => {
  return (
    <div
      className={`${style.projectsContainer} d-flex align-items-center justify-content-center flex-column`}
    >
      <OtherTitule />
      <div
        className={`${style.projectsContainer_cardsContainer} d-flex align-items-center justify-content-center flex-wrap gap-3`}
      >
        {allProjects.map((project) => (
          <Card
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
