
import '../src/css/App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Products from './components/Products.jsx'
import ContactForm from './components/ContactForm.jsx' 
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import MainLayout from './components/MainLayout.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <CartProvider>
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

          <Route path="/cart"
            element={
              <ProtectedRoute>
                <MainLayout><Cart/></MainLayout>
              </ProtectedRoute>
            }/>

            <Route path="*" element={<Login/>}/>

        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
