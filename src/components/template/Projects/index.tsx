import { Paragraph } from "../../basicComponents/Paragraph";
import { Title } from "../../basicComponents/Title";
import { ProjectContent } from "./ProjectContent";
import todo from "/public/assets/todo.png";
import base from "/public/assets/base.png";
import { ProductionTag } from "./ProductionTag";
import { useElementVisible } from "../../../hooks/useElementVisible";

export function Projects() {
  const isVisible = useElementVisible({
    elementId: "projects",
    threshold: 0.4,
  });
  const selectedProjects = [
    {
      name: "Conversor de Bases",
      urlProduction: "https://marlliton.github.io/base-converter/",
      repo: "https://github.com/Marlliton/base-converter",
      description: "Este é um projeto de conversão de bases numéricas.",
      isFinished: true,
      technologies: ["HTML", "CSS3", "JavaScript"],
      img: base,
    },

    {
      name: "To Do",
      repo: "https://github.com/Marlliton/to-do-list",
      description:
        "Aplicativo de tarefas, onde você pode fazer seu login e gerenciar o seu dia.",
      img: todo,
      isFinished: false,
      technologies: ["React", "Tailwind", "MongoDB", "NextJS"],
    },
    {
      name: "Em Breve",
      img: todo,
      description:
        "Por enquanto é só, mas não se preocupe, teremos muitas novidades chegando em breve.",
      isFinished: false,
    },
  ];

  const renderProjects = () => {
    return selectedProjects.map(project => {
      return (
        <li
          className={`flex-1 bg-dark-light min-w-[400px] rounded-lg relative overflow-hidden opacity-0 ${
            isVisible
              ? "animate-fade-in-l-x opacity-100"
              : "animate-fade-in-l-x-reverse"
          }`}
          key={project.name}
        >
          {!project.isFinished && <ProductionTag />}
          <ProjectContent
            technologies={project.technologies}
            githubProjectLink={project.repo ?? undefined}
            productionLink={
              project.isFinished ? project.urlProduction : undefined
            }
            name={project.name}
            img={project.img}
          >
            <Paragraph className="text-base">{project.description}</Paragraph>
          </ProjectContent>
        </li>
      );
    });
  };

  return (
    <div id="projects" className="flex flex-col py-6">
      <Title
        heading="h3"
        reverse
        insetLine
        textStyle="whitespace-nowrap"
        className="md:px-[4rem] lg:px-[10rem]"
      >
        Coisas que construí
      </Title>
      <div className="w-full pt-14">
        <ul className="flex justify-center gap-2 flex-wrap">
          {renderProjects()}
        </ul>
      </div>
    </div>
  );
}