import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './componant/Header'
import Contact from './pages/Contact'
import Loans from './pages/Loans'
import Accounts from './pages/Accounts'
import Hero from './componant/Hero'
import Footer from './componant/footer'
import Login from './pages/Authentication/Login'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Header/>
       <h1>Hii</h1>
       <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/contact" element={<Contact />} />

       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App
