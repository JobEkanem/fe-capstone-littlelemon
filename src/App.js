import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import Main from './pages/Main';
import Confirm from './pages/Confirm';
import Success from './pages/Success';


export function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/About' element={<About />} />
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Reservations' element={<Reservations />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/confirm' element={<Confirm />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

