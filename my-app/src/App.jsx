import React from 'react';
import PixelTrail from './components/pixeltrail.jsx';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <PixelTrail
        gridSize={50}
        trailSize={0.1}
        maxAge={250}
        interpolate={5}
        color="#5227FF"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
      />
    </div>
  );
}

export default App;