import './header.css'
import { useState, useEffect } from 'react'
export function HeaderPort (){

  return (
    <>
      <header>
        <section className='sec_logo'>
          <h2 className='logo_header'>DARIAR</h2>
        </section>
        <nav className='sec_nav'>
          <button>Sobre mi</button> 
          <button>Proyectos</button>
          <button>Skills</button>
          <button>Contactar</button>
        </nav>
      </header>
    </>
  ) 
}