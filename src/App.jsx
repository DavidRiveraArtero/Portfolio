import { HeaderPort } from './components/header/header'
import { Home } from './components/home/home'
import { Proyect } from './components/proyects/proyects';
import { Skills } from './components/skills/skills';
import './App.css'


function App() {



  return (
    <>
    
     
        <HeaderPort/>
        <main>
          <Home/>
          <Proyect/>
          <Skills/>
        </main>
      
    </>
  )
}

export default App
