import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import ContactForm from './components/ContactForm.jsx'
import ChartSection from './components/ChartSection.jsx'
import DataTable from './components/DataTable.jsx'
import ProductManager from './components/ProductManager.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>

        <Route path="/productos"
          element={
            <ProtectedRoute>
               <Navbar/>
              <Products/>
              <ContactForm/>
              <ChartSection/>
              <DataTable/>
              <ProductManager/>
            </ProtectedRoute>
          }/>

          <Route path="*" element={<Login/>}/>

      </Routes>
    </Router>
  )
}

export default App
