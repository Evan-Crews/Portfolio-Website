import MenuBar from './Components/MenuBar/MenuBar';
import Biography from './Components/Biography/Biography'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="menuBar">
        <MenuBar/>
      </div>
      <div className='biography'>
        <Biography/>
      </div>
    </div>
  );
}

export default App;
