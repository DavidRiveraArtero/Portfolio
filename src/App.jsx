import { HeaderPort } from './components/header/header'
import { Home } from './components/home/home'
import './App.css'

function App() {


  return (
    <>
      <HeaderPort/>
      <main>
        <Home/>
        <section className='sect_aboutMe'>
          <p>Apasionado de la programación que quiere dar sus primeros pasos en esta 
            industria y <span>seguir creciendo</span> tanto <span>personalmente</span> como <span>profesionalmente</span>.HOLA MUNDO</p>
        </section>
      </main>
      
    </>
  )
}

export default App
