import { HeaderPort } from './components/header/header'
import { Home } from './components/home/home'
import imgDavid from './../public/david.jpg'
import imgAjedrez from '/../public/Ajedrez.png'


import './App.css'

function App() {
  console.log({imgDavid})

  return (
    <>
      {/*ESTE SECTION ES POLEMICO MIRAR SI DEJARLO*/}
      <section className='firstP'>
        <HeaderPort/>
        <main>
          <Home/>
          <section className='containerProyect'>
            <h1>Proyectos</h1>
            <section className='listProyect'>
              <figure>
                <img className='imgProyect' src={imgAjedrez}/>
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
