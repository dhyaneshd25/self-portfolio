//import logo from './logo.svg';
import './App.css';
import Con from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';

import NavBar from './components/Navbar/navbar';
import Project from './components/Project/project';
import Skills from './components/Skills/skills';
function App() {
  return (
  
   <div>
    <NavBar/>
    <Intro/>
    <Skills/>
    <Project/>
    <Con/>
    <Footer/>
   </div>

  );
}

export default App;
