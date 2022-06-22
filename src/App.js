import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset To 0</button>
    </div>
  );
}

export default App;
