import React from 'react'
import { tw } from 'twind'



export const Button = ({ color = 'crelaroz', children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        className +" " +
        tw(`shadow-lg	 rounded-full text-white font-bold bg-${color} p-3`)
      }
    >
      {children}
    </button>
  );
};
