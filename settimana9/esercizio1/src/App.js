import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent url="https://placedog.net/500" alt="vecchioconpollice" />
        <hr></hr>
        <ButtonComponent name="Cliccami!" />
      </header>
    </div>
  );
}

export default App;
