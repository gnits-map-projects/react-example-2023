import React, {useState} from 'react';
import './App.css';
import Counter from './counter';
import DogsList from './dogs-list';
import Posts from './posts';
import AppContext from './state';

function App() {
  const [showPage, setPage] = useState('dogs-list');

  return (
    <AppContext>
      <div className="App">
        <div>
        <hr />
        <button onClick={() => setPage('counter')}>Show counter</button>
        <button onClick={() => setPage('dogs-list')}>Dogs List</button>
        <button onClick={() => setPage('posts')}>Show Posts</button>
        <hr />
        {showPage === "counter" &&
          <Counter />
        }
        {showPage === "dogs-list" &&
          <DogsList />
        }
        {
          showPage === 'posts' &&
          <Posts />
        }
        </div>
      </div>
    </AppContext>
  );
}

export default App;
