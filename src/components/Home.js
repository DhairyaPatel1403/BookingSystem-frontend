import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card } from './Card';
import './style.css';

export const Home = () => {
  return (
    <div>
      <div className='home-img'>
        <button>Date</button>
        <button>Place</button>
        <button>Budget</button>
      </div>

      <div className='hotels-header'>
        <div className='hotels-header-text'>Our Top Hotels</div>
        <div className='hotels-header-text-2'>See what fits best for your Vacation</div>
      </div> 

      <div className="card-container">
        {/* Wrap each Card component inside a Link */}
        <Link to="/details/NewYork/20">
          <Card name="NewYork City" price="$20" />
        </Link>
        <Link to="/details/LosAngeles/50">
          <Card name="Los Angeles" price="$50" />
        </Link>
        <Link to="/details/Berlin/70">
          <Card name="Berlin" price="$70" />
        </Link>
        <Link to="/details/Switzerland/20">
          <Card name="Switzerland" price="$20" />
        </Link>
        <Link to="/details/Mumbai/30">
          <Card name="Mumbai" price="$30" />
        </Link>
        <Link to="/details/Munich/20">
          <Card name="Munich" price="$20" />
        </Link>
      </div>
    </div>
  );
};
