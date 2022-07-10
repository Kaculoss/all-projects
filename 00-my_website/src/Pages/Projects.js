import { projectData } from "../projectData";
import { IconContext } from "react-icons";
import { FaFileCode } from "react-icons/fa";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import MyButton from "../Components/MyButton";

function Projects() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="App">
        <header className="App-header">
          <SocialMediaIcons />
          <div className="App-header-info">
            <img src="./images/head.webp" className="header-image" alt="head" />
            <div className="info">
              <div className="personal-info">
                <h1>Sani's Projects</h1>
                <p>
                  Projects are the most practical way to learn any language, and
                  React is no exception. Solidify your knowledge of React by
                  creating these cool projects.
                </p>
              </div>
              <MyButton
                btnLink="https://github.com/Kaculoss/all-projects"
                btnText={
                  <>
                    <FaFileCode size="1.5em" />
                    <span>Project Source Codes</span>
                  </>
                }
              />
            </div>
          </div>
        </header>
        <main className="App-main">
          {projectData.allProjects.map((project) => (
            <AllProjects key={project.name} projects={project} />
          ))}
        </main>
      </div>
    </IconContext.Provider>
  );
}

const AllProjects = ({ projects }) => {
  return (
    <>
      <div className="App-main-title">
        <h2>{projects.name} Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="App-main-projects">
        {projects.projects.map((project) => {
          const { id, img, name } = project;
          return <Project key={id} img={img} name={name} />;
        })}
      </div>
    </>
  );
};

const Project = ({ img, name }) => {
  return (
    <div className="project">
      <img src={img} alt={name} />
      <div className="project-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Projects;
