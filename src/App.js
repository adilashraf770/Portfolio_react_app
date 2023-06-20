import './App.scss';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle';

// componants 
import Header from 'componants/Header'

// Pages 
import Home from 'pages/Home'
import About from 'pages/About'
import Work from 'pages/Work'
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div >
  );
}

export default App;
