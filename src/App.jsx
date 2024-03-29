import "./App.css";
//component imports
import Nav from './components/Nav/Nav'

//page imports
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Landing from './pages/Landing Page/Landing'
import Single from './pages/Single/Single'

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/display' element={<Single />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>


    </div>
  )
}

export default App
