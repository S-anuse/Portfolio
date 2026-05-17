import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import Stats from "./components/Stats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App
