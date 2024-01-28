import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import Navbar from './Navbar';
import Carousel from './Carousel';
import '../styles/Homepage.css';

const Homepage = () => {
  const [hotelItems, setHotelItems] = useState([]);
  useEffect(() => {
    const fetchHotelItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setHotelItems(response.data.items);
      } catch (error) {
        console.error('Error fetching hotel items:', error);
      }
    };
    fetchHotelItems();
  }, []);
  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <h1>Latest Hotels</h1>
        <p>Please select a hotel</p>
        <span><Carousel items={hotelItems} /></span>
      </div>
    </>
  );
};
export default Homepage;
