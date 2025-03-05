// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './Components/ProductDetailsPage';
import AboutMe from './Components/AboutMe';
import IndexPage from './Components/indexPage';
import Footer from './Components/footer';
import Header from './Components/Header';
import ResourcePage from './Components/ResourchPage';
import Textile from './Components/Textile';
import HeaderBar from './Components/HeaderBar';
import './App.css';  // Global CSS

const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HeaderBar />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/research" element={<ResourcePage />} />
          <Route path="/textile" element={<Textile />} />
          <Route path="/work" element={<HeaderBar />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
