import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotFound } from "./components/NotFound/NotFound"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"

// screens
import { HomeScreen } from './screens/Home/HomeScreen'
import { CartScreen } from './screens/Cart/CartScreen'
import ProductScreen from './screens/Product/ProductScreen';
import { CustomerInfoScreen } from './screens/CustomerInfo/CustomerInfoScreen';
import { PaymentScreen } from './screens/Payment/PaymentScreen';

// admin
import { Dashboard } from './components/Admin/Dashboard'

// auth
import { AuthProvider } from "./components/Auth/Auth"
import { Register } from "./components/Auth/Register"
import { Login } from "./components/Auth/Login"
import { RequireAuth } from './components/Auth/RequireAuth';

function App() {
  return (    
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/info' element={<CustomerInfoScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />

          {/* 404 */}
          <Route path='*' element={<NotFound />} />

          {/* auth */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* admin */}
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />           
        </Routes>
        <Footer />
      </AuthProvider>    
  );
}

export default App;
