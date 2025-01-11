import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import "./App.css"
import CustomCursor from './components/CustomCursor.tsx';
import Footer from './components/Footer.tsx';


function App() {
  return (
    <BrowserRouter>
      <CustomCursor/>
      <Header/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
