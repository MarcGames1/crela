import React, {useState} from 'react'
import { tw } from 'twind'



export const Button = ({ color = 'crelaroz', children, onClick, style="" }) => {
  
  const bgColor = (color ==='crelaroz') ? `bg-${color}` : `bg-[${color}]`
  
  return (
    <button
      onClick={onClick}
      className={tw(
        `${style} shadow-lg	 rounded-full text-white font-bold ${bgColor} p-3`
      )}
    >
      {children}
    </button>
  );
};
