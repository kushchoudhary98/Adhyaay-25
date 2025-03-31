import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-white p-4 border border-gray-300 shadow-lg rounded-lg  rounded-lg transform hover:scale-110 transition-transform duration-300">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-60 object-cover grayscale" />

      {/* Name & Role */}
      <div className="flex justify-between items-center mt-4 px-2">
        <h2 className="text-3xl text-gray-400 font-extrabold tracking-wider">{name}</h2>
        <p className="text-gray-400 uppercase text-sm font-semibold">{role}</p>
      </div>

      {/* Bottom Border Decoration */}
      <div className="mt-4 h-4 bg-black flex space-x-1">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-4 h-full bg-white rotate-45"></div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
