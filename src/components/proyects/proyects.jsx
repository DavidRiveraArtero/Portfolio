import proyectos from '../../assets/doc/proyects.json'

import "./proyects.css"

export function Proyect(){
    return (
        <section className='containerProyect' id='proyect'>
            <h1>PROYECTOS</h1>
            <section className='listProyect'>
              {
                proyectos.proyect.map((proyect, key)=>{
                  return (
                    <a key={key} className='listProyectRef' href={proyect.ruta} target="_blank">
                      <img className='imgProyect' src={proyect.img}/>
                      <div className='languajeProyect'>
                        {
                          proyect.languaje.map((lang,key2)=>{
                            console.log("LANG: ", key2)
                            return(
                              <img key={key2} src={lang}/>
                            )
                          })
                        }
                      </div>
                      <figcaption>{proyect.desc}</figcaption>
                    </a>
                  )
                })
              }  
            </section>
          </section> 
    )
}