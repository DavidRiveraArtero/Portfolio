import { HeaderPort } from './components/header/header'
import { Home } from './components/home/home'
import { Proyect } from './components/proyects/proyects';
import { Skills } from './components/skills/skills';
import './App.css'


function App() {

  function reveal() {
    var reveals = document.getElementsByClassName("containerProyect");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 12;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <>
      {/*ESTE SECTION ES POLEMICA MIRAR SI DEJARLO*/}
      <section className='firstP'>
        <HeaderPort/>
        <main>
          <Home/>
          <Proyect/>
          <Skills/>
        </main>
      </section> 
    </>
  )
}

export default App
