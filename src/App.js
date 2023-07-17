import './App.css';
import Counter from './counter';
import DogsList from './dogs-list';

function App() {
  console.log('parent rendered')
  return (
    <div className="App">
      {/* <Counter /> */}
      <DogsList />
    </div>
  );
}

export default App;
