import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/Contact";
import Photo from "./components/profilephoto";
import Projects from "./components/projects";
function App() {
  return (
    <>
      <div>
        {" "}
        <Header />{" "}
      </div>

      <div className="profilephoto">
        <Photo />
        <div className="info">
          {" "}
          <h2> About </h2>
          <About />
        </div>
        <div>
          {" "}
          <h2> Projects </h2>
          <Projects />
        </div>
        <div>
          {" "}
          <h2> Contact </h2>
          <Contact />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
