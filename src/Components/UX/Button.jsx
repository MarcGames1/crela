import React from 'react'
import { tw } from 'twind'

export const Button = ({ color ='crelaRoz', children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={tw(
        ` shadow-lg	 rounded-full text-white font-bold bg-${color} p-3`
      )}
    >
      {children}
    </button>
  );
};
