import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import SearchBar from '../../Search_bar/SearchBar';
import "./cart.css";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className='cart'>
      
      </div>
      <Footer />
    </div>
  )
}

export default Cart