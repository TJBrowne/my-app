import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/SideBar";
import Introduction from "./Components/Intro";
import About from "./Components/AboutMe";
import Projects from "./Components/MyProjects";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
