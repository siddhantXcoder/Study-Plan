import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, active, linkTo }) => {
  return (
    <div>
      <Link to={linkTo}>
        <div
          className={`text-center flex items-center gap-2 px-4 py-2 rounded-md font-Bebas ${
            active
              ? 'bg-yellow-400 text-black shadow-md'
              : 'bg-gray-800 text-white shadow-lg'
          } hover:scale-95 transition-all duration-200 md:text-lg`}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};
