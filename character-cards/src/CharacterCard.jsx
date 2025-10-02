import React from "react";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:scale-105 transition"
      onClick={() => onClick(character)}
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-2 text-xl font-bold">{character.name}</h2>
      <p className="text-gray-600 text-sm">{character.description}</p>
    </div>
  );
};

export default CharacterCard;
