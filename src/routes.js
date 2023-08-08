import React, {useState} from 'react';
import './App.css';
import Counter from './counter';
import DogsList from './dogs-list';
import Posts from './posts';
import AppContext from './state';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

const About = () => {
  return (
    <div>About Page</div>
  )
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/counter')}>Show counter</button>
      <button onClick={() => navigate('/dogs-list')}>Dogs List</button>
      <button onClick={() => navigate('/posts')}>Show Posts</button>
      <hr />
  </div>
  )
}

function App() {
  const [showPage, setPage] = useState('dogs-list');
  return (
      <BrowserRouter>
        <AppContext>
          <div className="App">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/dogs-list" element={<DogsList />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
          </div>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
