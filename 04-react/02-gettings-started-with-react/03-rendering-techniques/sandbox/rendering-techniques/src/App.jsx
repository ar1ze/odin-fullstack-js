import './App.css';

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function ListAllAnimals(props) {
  return (
    <ul>
      {props.animalList.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function ListAnimalsThatStartsWithL(props) {
  return (
    <ul>
      {props.animalList.map((animal) => {
        return (
          animal.startsWith('L') && <ListItem key={animal} animal={animal} />
        );
      })}
    </ul>
  );
}

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  return (
    <div>
      <h1>Animals:</h1>
      <p>All animals</p>
      <ListAllAnimals animalList={animals} />
      <p>Animals starting with letter "L"</p>
      <ListAnimalsThatStartsWithL animalList={animals} />
    </div>
  );
}

export default App;
