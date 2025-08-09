// src/App.js

import React from 'react';
import PixelTrail from './components/pixeltrail.jsx';

function App() {
  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <PixelTrail
        gridSize={50}
        trailSize={0.1}
        maxAge={250}
        interpolate={5}
        color="#2279aeff"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
      />
    </div>
  );
}

export default App;

