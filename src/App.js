import "./App.css";
import { useCounter } from "./useCounter";
function App() {
  const { count, increase, decrease, reset } = useCounter();

  return (
    <div className="App">
      <h1>Your number is: {count}</h1>
      <br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
