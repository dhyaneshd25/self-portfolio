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
    /*
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
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
