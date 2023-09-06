import './header.css'
import { useState, useEffect } from 'react'
export function HeaderPort (){

  const [mostrar, setMostar] = useState(true)
  
 
  function mostrarMenu (event){
    if(mostrar){
      event.target.parentNode.parentNode.parentNode.getElementsByClassName("ocult_nav")[0].style.display = "flex"
      
      setMostar(!mostrar)
    }else{
      event.target.parentNode.parentNode.parentNode.getElementsByClassName("ocult_nav")[0].style.display = "none"
      

      setMostar(!mostrar)
    }
  }

  return (
    <>
      <header>
        <section className='sec_logo'>
          <h2 className='logo_header'>DARIAR</h2>
        </section>
        <nav className='sec_nav'>
          <button>About Me</button> 
          <button>Proyecs</button>
          <button>Skills</button>
          <button>Contact</button>
        </nav>
        <nav className='btn_menu'>
          <svg onClick={mostrarMenu} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
          </svg>
        </nav>
      </header>
      <nav className='ocult_nav'>
        <a>About Me</a>
        <a>Proyecs</a>
        <a>Skills</a>
        <a>Contact</a>
      </nav>
    </>
  )
   
}

