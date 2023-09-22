import proyectos from '../../assets/doc/proyects.json'

import "./proyects.css"

export function Proyect(){
    return (
        <section className='containerProyect' id='proyect'>
            <h1 className='sectionTitle'>PROYECTOS</h1>
            <section className='listProyect'>
              {
                proyectos.proyect.map((proyect, key)=>{
                 
                  return (
                    <a key={key} className='listProyectRef' href={proyect.ruta} target="_blank">
                      
                      <img alt='imgProyect' className='imgProyect' src={proyect.img}/>
                      <div className='languajeProyect'>
                        {
                          proyect.languaje.map((lang,key2)=>{
                            
                            return(
                              <img key={key2} src={lang.ruta_lang}/>
                            )
                          })
                        }
                      </div>
                      
                      <figcaption>
                        <section className='title'>
                          <h2>{proyect.name}</h2>
                        </section>
                        <section className='desc'>
                          <p>{proyect.desc}</p>
                        </section>
                      </figcaption>
                    </a>
                  )
                })
              }  
            </section>
          </section> 
    )
}