import { useState } from 'react';
import './App.css';

const COLORS = ['#F48FB1', '#A5D6A7', '#90CAF9', '#FFF59D', '#CE93D8'];

function Button({ color, selectedColor, onButtonClick }) {
  return (
    <button
      onClick={() => onButtonClick(color)}
      className={selectedColor === color ? 'selected' : ''}
      type="button"
    >
      {color}
    </button>
  );
}

function Buttons({ backgroundColor, onColorChange }) {
  return (
    <div className="button-container">
      {COLORS.map((color) => (
        <Button
          key={color}
          color={color}
          selectedColor={backgroundColor}
          onButtonClick={onColorChange}
        />
      ))}
    </div>
  );
}

function Count({ backgroundCount }) {
  return <p className="count">Count: {backgroundCount}</p>;
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundCount, setBackgroundCount] = useState(0);

  const handleButtonClick = (newColor) => {
    setBackgroundColor(newColor);
    setBackgroundCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="app" style={{ backgroundColor }}>
      <Buttons
        backgroundColor={backgroundColor}
        onColorChange={handleButtonClick}
      />
      <Count backgroundCount={backgroundCount} />
    </main>
  );
}

export default App;
