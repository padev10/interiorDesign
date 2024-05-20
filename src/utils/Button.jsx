// import React from 'react'

const Button = ({ name, url }) => (
  <a href={url}>
    <button
      className={`py-6 rounded-full bg-orangey text-white font-semibold text-lg mt-8 w-[280px] uppercase tracking-widest hover:bg-black transition`}
    >
      {name}
    </button>
  </a>
);

export default Button;
