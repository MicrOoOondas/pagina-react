
import '../src/css/App.css'
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

              <ChartSection/>

              <ProductManager/>

              <DataTable/>

              <ContactForm/>

            </ProtectedRoute>

          }/>

          <Route path="*" element={<Login/>}/>

      </Routes>
    </Router>
  )
}

export default App
