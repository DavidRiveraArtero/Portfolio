
import css from '../../assets/svg/css.svg'
import html from '../../assets/svg/html.svg'
import react from '../../assets/svg/react.svg'


import imgDavid from '../../assets/img/david.jpg'
import imgAjedrez from '../../assets/img/Ajedrez.png'

import "./proyects.css"

export function Proyect(){
    return (
        <section className='containerProyect' id='proyect'>
            <h1>PROYECTOS</h1>
            <section className='listProyect'>
              <a className='listProyectRef' href='https://main--candid-fenglisu-29722f.netlify.app/' target="_blank">
                <img className='imgProyect' src={imgAjedrez}/>
                <div className='languajeProyect'>
                  <img src={html}/>
                  <img src={css}/>
                  <img src={react}/>
                </div>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </a>

              <a className='listProyectRef'>
                <img className='imgProyect' src={imgDavid}/>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </a>
              
              <a className='listProyectRef'>
                <img className='imgProyect' src={imgDavid}/>
                <figcaption>En este proyecto ponemos en practica la modificacion de arrays</figcaption>
              </a>
              
            </section>
          </section> 
    )
}