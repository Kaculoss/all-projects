import "./App.css";
import { projectData } from "./projectData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/Sani Alhassan.jpg" alt="Sani Alhassan" />
        <div>
          <h1>Sani Alhassan Projects</h1>
          <p>
            Projects are the most practical way to learn any language, and React
            is no exception. Solidify your knowledge of React by creating these
            cool projects.
          </p>
        </div>
      </header>
      <main className="App-main">
        <div className="App-main-title">
          <h2>Basic Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="App-main-projects">
          {projectData.map((project) => {
            const { id, img, name } = project;
            return <Project key={id} img={img} name={name} />;
          })}
        </div>
      </main>
      <footer className="App-footer">
        <p>LinkedIn</p>
        <p>Whatsapp</p>
        <p>GitHub</p>
        <p>Twitter</p>
        <p>Gmail</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </footer>
    </div>
  );
}

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
