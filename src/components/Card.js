import React from 'react';
import './style.css';
import hotel from '../hotel.jpg'

export const Card = ({ name, price }) => {
  return (
    <div className="card">
      <img src={hotel} alt="" />
      <div className="card-content">
        <h2>{name}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
        </p>
        <a href="#" className="button">
          Find out more 
          <span className="material-symbols-outlined">
            arrow_right_alt
          </span>
        </a>
      </div>
    </div>
  );
};
