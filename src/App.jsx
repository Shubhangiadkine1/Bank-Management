import React, { Suspense } from 'react'
import { BrowserRouter, Routes ,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Header from './componant/Header'
import Contact from './pages/Contact'
import Loans from './pages/Loans'
import Accounts from './pages/Accounts'
import Hero from './componant/Hero'
import Footer from './componant/footer'
import Login from './pages/Authentication/Login'
import "./App.css"
import Create_Account from './pages/Create_Account'
const App = () => {
  const location = useLocation()

  const hideLayout = location.pathname === '/login';

  return (
<Suspense>
  {!hideLayout &&  <Header/>}

       <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/create-account" element={<Create_Account />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
           {!hideLayout &&  <Footer/>}

</Suspense>  )
}

export default App
