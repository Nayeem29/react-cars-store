import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Car from './Components/Cars/Car';
import Cart from './Components/Cart/Cart';
import Order from './Components/Orders/Order';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/car' element={<Car />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
