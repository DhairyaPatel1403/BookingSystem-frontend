import React from 'react';
import { useParams } from 'react-router-dom';
import hotel from '../hotel.jpg'

export const Details = () => {
  const { name, price } = useParams();

  return (
    <div className="details-card">
      <img src={hotel} alt="Blurred Red Image" className="details-card-image" />
      <div className="details-card-content">
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};