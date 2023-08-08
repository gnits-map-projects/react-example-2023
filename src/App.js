import React from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import Counter from './counter';
import DogsList from './dogs-list';
import Posts from './posts';
import AppContext from './state';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
    <button onClick={() => navigate("/counter")}>Show counter</button>
    <button onClick={() => navigate('/dogs-list')}>Dogs List</button>
    <button onClick={() => navigate('/posts')}>Show Posts</button>
    <hr />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/dogs-list' element={<DogsList />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </div>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
