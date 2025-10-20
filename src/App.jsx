
import '../src/css/App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Products.jsx'
import ContactForm from './components/ContactForm.jsx' 
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import MainLayout from './components/MainLayout.jsx';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>

        <Route path="/productos"
          element={
            <ProtectedRoute>
              <MainLayout><Products/></MainLayout>
            </ProtectedRoute>
          }/>
        
        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout><Dashboard/></MainLayout>
            </ProtectedRoute>
          }/>

        <Route path="/contact"
          element={
            <ProtectedRoute>
              <MainLayout><ContactForm/></MainLayout>
            </ProtectedRoute>
          }/>
          <Route path="*" element={<Login/>}/>

      </Routes>
    </Router>
  )
}

export default App
