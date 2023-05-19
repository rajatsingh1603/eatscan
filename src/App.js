import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import CheckoutPage from './components/CheckoutPage';
import OrderRecieved from './components/OrderRecieved';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="checkout" element={ <CheckoutPage/> } />
        <Route path='/checkout/order-recieved' element={<OrderRecieved />} />
      </Routes>
    </div>
  );
}

export default App;
