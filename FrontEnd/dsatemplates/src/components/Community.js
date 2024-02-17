import React from 'react';
import './Community.css'
import whatsapp from './Whatsapp.png';
import discord from './Discord.png';
import telegram from './Telegram.png';

const Community = () => {
  return (
    <div>
      <h1>Community</h1>
      <div className="cardContainer">
        {/* <div className="card">
        <a href="https://chat.whatsapp.com/Jeb31C5IjY3ATSC69SQ10Y" target="_blank" rel="noopener noreferrer">
          <div className='card-icon'>
          <img  src={whatsapp} className='card-image'alt='WhatsApp Group'/></div>
          <div className='card-title'>
                <p className='card-title-text'>Whatsapp</p>
          </div>
        </a>
        </div> */}
        <div className="card">
        <a href="https://chat.whatsapp.com/Jeb31C5IjY3ATSC69SQ10Y" target="_blank" rel="noopener noreferrer">
          <div className='card-icon'>
          <img  src={telegram} className='card-image'alt='WhatsApp Group'/></div>
          <div className='card-title'>
                <p className='card-title-text'>Telegram</p>
          </div>
        </a>
        </div>
        {/* <div className="card">
        <a href="https://chat.whatsapp.com/Jeb31C5IjY3ATSC69SQ10Y" target="_blank" rel="noopener noreferrer">
          <div className='card-icon'>
          <img  src={discord} className='card-image'alt='WhatsApp Group'/></div>
          <div className='card-title'>
                <p className='card-title-text'>Discord</p>
          </div>
        </a>
        </div> */}
      </div>
    </div>
  );
};

export default Community;
