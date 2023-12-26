import { Route, Routes } from 'react-router-dom'
import Navbar from './utils/Navbar'
import Home from './components/Home'
import About from './components/About'
import CreatePlan from './components/CreatePlan'
import Footer from './utils/Footer'
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <div class='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/createplan' element={<CreatePlan />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
