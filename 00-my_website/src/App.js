import "./App.css";
import { projectData } from "./projectData";
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
import { ScrollToTop } from "./ScrollToTop";

export const profiles = {
  twitter: "https://twitter.com/Sani_M_Alhassan",
  linkedin: "https://linkedin.com/in/sani-mohammed-alhassan-keezy",
  instagram: "https://www.instagram.com/kaculoss/",
  facebook: "https://web.facebook.com/kaculossde.dhopebwoy/",
  github: "https://github.com/Kaculoss",
};

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noreferrer");
  if (newWindow) newWindow.opener = null;
};

function App() {
  return (
    <IconContext.Provider value={{ size: "2em", lineHeight: "2em" }}>
      <div className="App">
        <header className="App-header">
          <div className="App-header-personal">
            <ul>
              <li onClick={() => openInNewTab(profiles.github)}>
                <FaGithubSquare color="#16293c" />
              </li>
              <li onClick={() => openInNewTab(profiles.linkedin)}>
                <FaLinkedin color="#0077b5" />
              </li>
              <li onClick={() => openInNewTab(profiles.twitter)}>
                <FaTwitterSquare color="#00acee" />
              </li>
              <li onClick={() => openInNewTab(profiles.instagram)}>
                <FaInstagramSquare color="#cd486b" />
              </li>
              <li onClick={() => openInNewTab(profiles.twitter)}>
                <FaFacebookSquare color="#3b5998" />
              </li>
            </ul>
          </div>
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
          {projectData.map((project) => (
            <AllProjects key={project.name} projects={project} />
          ))}
        </main>
        <ScrollToTop />
        <footer className="App-footer">
          <div className="App-footer-icons">
            <ul>
              <li onClick={() => openInNewTab(profiles.github)}>
                <FaGithubSquare color="#4078c0" />
              </li>
              <li onClick={() => openInNewTab(profiles.linkedin)}>
                <FaLinkedin color="#0077b5" />
              </li>
              <li onClick={() => openInNewTab(profiles.twitter)}>
                <FaTwitterSquare color="#00acee" />
              </li>
              <li onClick={() => openInNewTab(profiles.instagram)}>
                <FaInstagramSquare color="#cd486b" />
              </li>
              <li onClick={() => openInNewTab(profiles.twitter)}>
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
        <h2>{projects.name}</h2>
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

export default App;
