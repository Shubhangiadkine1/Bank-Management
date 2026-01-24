import React, { Suspense } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Loans from "./pages/Loans";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/Create_Account";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Hero from "./components/Hero";

function App() {
  const location = useLocation();

  const hideFooterPages = ["/dashboard", "/accounts", "/loans","/login"];
  const hideFooter = hideFooterPages.includes(location.pathname);

  return (
     <Suspense>

           
       <Header/>
   
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
     </Routes>

      {!hideFooter && <Footer />}
     </Suspense>
  );
}

export default App;
