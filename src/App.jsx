import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Merch from './pages/Merch'
// import Sponsors from './pages/Sponsors'
import Team from './pages/Team'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='events' element={<Events />} />
        <Route path='merch' element={<Merch />} />
        {/* <Route path='sponsors' element={<Sponsors />} /> */}
        <Route path='teams' element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
