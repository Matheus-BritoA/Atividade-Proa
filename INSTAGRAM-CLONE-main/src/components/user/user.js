import React from 'react';
import './user.css';
import Lopp from './Foto1.png';

function User() {
  return (
    <div className='box'><img className='user' src={Lopp} alt="img" />
    <h3>Bryan Belum</h3>
    <img className='points' src={"https://cdn1.iconfinder.com/data/icons/lightly-selected/30/more-480.png"} />
    </div>
  )}    
  export default User;