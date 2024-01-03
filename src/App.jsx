import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Nav from './Components/Nav/Nav'
import Background from './Components/Background/Background'
import { SelectorContextProvider } from './Context/SelectorContext'
import Certificaciones from './Pages/Certificaciones/Certificaciones'
import { ModalContextProvider } from './Context/ModalContext'
import Proyectos from './Pages/Proyectos/Proyectos'
import { ModalContexVideoProvider } from './Context/ModalContexVideo'
import Contacto from './Pages/Contacto/Contacto'
import SobreMi from './Pages/SobreMi/SobreMi'
import Home from './Pages/Home/Home'

function App() {

  return (
    <SelectorContextProvider>
      <ModalContextProvider>
        <ModalContexVideoProvider>
          <HashRouter>
            <Background />
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/certificaciones' element={<Certificaciones />} />
              <Route path='/proyectos' element={<Proyectos />} />
              <Route path='/sobremi' element={<SobreMi />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
          </HashRouter>
        </ModalContexVideoProvider>
      </ModalContextProvider>
    </SelectorContextProvider>
  )
}

export default App
