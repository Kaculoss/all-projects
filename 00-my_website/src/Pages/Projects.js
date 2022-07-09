import { projectData } from "../projectData";
import { IconContext } from "react-icons";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaFileCode,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import SocialMediaIcons, { openInNewTab } from "../Components/SocialMediaIcons";
import { ScrollToBottom, ScrollToTop } from "../Components/ScrollButton";

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
              <a
                href="https://github.com/Kaculoss/all-projects"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileCode size="1.5em" />
                <span>Project Source Codes</span>
              </a>
            </div>
          </div>
        </header>
        <main className="App-main">
          {projectData.allProjects.map((project) => (
            <AllProjects key={project.name} projects={project} />
          ))}
        </main>
        <ScrollToTop />
        <ScrollToBottom />
        <footer className="App-footer">
          <div className="App-footer-icons">
            <ul>
              <li onClick={() => openInNewTab(projectData.profiles.github)}>
                <FaGithubSquare color="#4078c0" />
              </li>
              <li onClick={() => openInNewTab(projectData.profiles.linkedin)}>
                <FaLinkedin color="#0077b5" />
              </li>
              <li onClick={() => openInNewTab(projectData.profiles.twitter)}>
                <FaTwitterSquare color="#00acee" />
              </li>
              <li onClick={() => openInNewTab(projectData.profiles.instagram)}>
                <FaInstagramSquare color="#cd486b" />
              </li>
              <li onClick={() => openInNewTab(projectData.profiles.twitter)}>
                <FaFacebookSquare color="#3b5998" />
              </li>
            </ul>
          </div>
          <div className="App-footer-texts">
            <ul>
              <li>
                <GrMail color="#c71610" />
                <span style={{ marginLeft: ".3rem" }}>
                  Sanialhassan853@gmail.com
                </span>
              </li>
              <li>
                <FaWhatsappSquare color="#25d366" />
                <span style={{ marginLeft: ".3rem" }}>+23354 9853 041</span>
              </li>
            </ul>
          </div>
        </footer>
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
