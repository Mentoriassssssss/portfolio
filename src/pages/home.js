import React from "react";

import Navbar from "../components/navbar";
import Intro from "../components/intro";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import transition from '../components/transition'

const Home = () => {

    return (
    <div 
    className="h-full w-full flex flex-col justify-center items-center m-0 bg-[var(--body-color)]"
    >
      <Navbar/>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>)
}

export default transition(Home);