import React from 'react'
import {ThemeProvider} from './context/ThemeContext'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';
import About from './pages/About';
import CoinPage from './pages/CoinPage'
import Footer from './components/Footer';

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/coin/:coinId' element={<CoinPage/>}>
          <Route path=':coinId'/>
        </Route>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
