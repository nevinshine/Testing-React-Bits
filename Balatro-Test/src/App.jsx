import Balatro from './components/Balatro.jsx';
import './App.css'; // We'll use this for styling

function App() {
  return (
    <div className="App">
      <Balatro
        isRotate={false}
        mouseInteraction={true}
        pixelFilter={700}
      />
    </div>
  );
}

export default App;