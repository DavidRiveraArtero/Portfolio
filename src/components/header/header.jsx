import './header.css'

export function HeaderPort (){

  function scrollEvent(event){

    const idRute = event.target.innerHTML

    document.getElementById(idRute.toLowerCase()).scrollIntoView({
      behavior: 'smooth'
    })
  }

   /**
	 * Método que envía un e-mail a través del cliente que tenga por defecto
	 * @param  {String} insTextoComp Texto que aparecerá dentro del mensaje
	 */

   function enviarCorreo(insTextoComp){
    var sEmail = "dariarzero@gmail.com";
		if(sEmail != null) {
			var sLink = "mailto:" + escape(sEmail)
			 + "?subject=" + escape("Contactar")
			 + "&body=";
			window.location.href = sLink;
		}
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
          <button onClick={enviarCorreo}>Contactar</button>
        </nav>
      </header>
    </>
  ) 
}