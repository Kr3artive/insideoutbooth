import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ContactHero from "./components/ContactHero"
import Header from"./components/Header"
import Footer from './components/Footer'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Inspire from "./components/Inspire"
import WelcomeMessage from "./components/WelcomeMessage"
import Friends from "./components/Friends"
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <ContactHero/>
        <Header/>
        <WelcomeMessage/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Inspire/>
        <Friends/>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
