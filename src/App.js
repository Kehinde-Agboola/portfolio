import React from "react";
import Nav from "./component/NavBar/Nav";
import Projects from "./component/Projects/Projects";
import Tools from "./component/Language/Tools";
import Message from "./component/Message/Message";
import Home from "./component/Home/Home";
import Experience from "./component/Experience/Experience";
import About from "./component/AboutMe/About";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About style={`background: red`} />
      <Tools />
      <Projects />
      <Experience />
      <Message />
    </>
  );
};

export default App;
