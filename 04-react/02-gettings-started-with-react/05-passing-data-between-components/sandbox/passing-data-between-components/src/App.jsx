import './App.css';

function Button({ text = 'Click Me!', color = 'violet', fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  return <button style={buttonStyle}>{text}</button>;
}

function App() {
  return (
    <>
      <div>
        <Button />
        <Button text="Don't Click Me!" color="cyan" />
        <Button fontSize={20} />
      </div>
    </>
  );
}

export default App;
