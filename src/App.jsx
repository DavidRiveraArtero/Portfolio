import { HeaderPort } from './components/header/header'
import { Home } from './components/home/home'
import imgDavid from './assets/img/david.jpg'
import imgAjedrez from './assets/img/Ajedrez.png'

import html from './assets/svg/html.svg'
import css from './assets/svg/css.svg'
import react from './assets/svg/react.svg'


import './App.css'

function App() {

  return (
    <>
      {/*ESTE SECTION ES POLEMICO MIRAR SI DEJARLO*/}
      <section className='firstP'>
        <HeaderPort/>
        <main>
          <Home/>
          <section className='containerProyect'>
            <h1>PROYECTOS</h1>
            <section className='listProyect'>
              <figure>
                <img className='imgProyect' src={imgAjedrez}/>
                <div className='languajeProyect'>
                  <img src={html}/>
                  <img src={css}/>
                  <img src={react}/>
                </div>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </figure>

              <figure>
                <img className='imgProyect' src={imgDavid}/>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </figure>
              
              <figure>
                <img className='imgProyect' src={imgDavid}/>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </figure>
            </section>
          </section>  
        </main>
      </section> 
    </>
  )
}

export default App
