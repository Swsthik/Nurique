import React from 'react';

const GameComponent = ({ githubLink }) => {
  return (
    <div className="flex justify-center items-center flex-col w-[100%]">
      <h2 className="text-xl font-semibold mb-2">Game</h2>
      <iframe
        title="Embedded Game"
        className="w-full h-full border-2 border-gray-300 rounded-lg" // Adjust width and height as needed
        src={githubLink}
        // frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GameComponent;
