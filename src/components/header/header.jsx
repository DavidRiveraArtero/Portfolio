import './header.css'

export function HeaderPort (){

  function scrollEvent(event){

    const idRute = event.target.innerHTML

    document.getElementById(idRute.toLowerCase()).scrollIntoView({
      behavior: 'smooth'
    })

  }
 
  return (
    <>
      <header>
        <section className='sec_logo'>
          <h2 className='logo_header'>DARIAR</h2>
        </section>
        <nav className='sec_nav'>
          <button onClick={scrollEvent}>Experiencia</button> 
          <button onClick={scrollEvent}>Proyectos</button>
          <button onClick={scrollEvent}>Skills</button>
          <button>Contactar</button>
        </nav>
      </header>
    </>
  ) 
}