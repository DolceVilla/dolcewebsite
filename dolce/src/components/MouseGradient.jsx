// MouseGradient.jsx
import React, { useState } from 'react';

const MouseGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Gradient effect following mouse */}
      <div
        className="pointer-events-none absolute w-64 h-64 bg-gradient-radial from-indigo-500/30 via-transparent to-transparent rounded-full blur-2xl transition-transform duration-100"
        style={{
          left: position.x - 128, // 128 = 64 / 2 (center the gradient)
          top: position.y - 128,
        }}
      ></div>

      {/* Your content */}
      <div className="relative z-10 text-white flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold">Move your mouse</h1>
      </div>
    </div>
  );
};

export default MouseGradient;