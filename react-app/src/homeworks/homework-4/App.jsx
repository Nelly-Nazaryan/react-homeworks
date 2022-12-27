import React from 'react';
import './App.css';
import Carusel from './components/Carusel/Carusel';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Navbar from './components/Navbar/Navbar';
import ToolBar from './components/Toolbar/Toolbar';
import FeaturedProducts from './components/FeaturedProducts';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ToolBar />
      <Navbar />
      <Carusel />
      <Featured />
      <Categories />
      <FeaturedProducts />
      <Offer />
      <FeaturedProducts />
      <Footer />
    </>
  )
}
