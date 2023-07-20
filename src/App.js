import React, {useState} from 'react';
import './App.css';
import Counter from './counter';
import DogsList from './dogs-list';

function App() {
  const [showPage, setPage] = useState('dogs-list');

  return (
    <div className="App">
      <div>
      <hr />
      <button onClick={() => setPage('counter')}>Show counter</button>
      <button onClick={() => setPage('dogs-list')}>Dogs List</button>
      <hr />
      {showPage === "counter" &&
        <Counter />
      }
      {showPage === "dogs-list" &&
        <DogsList />
      }
      </div>
    </div>
  );
}

export default App;
