import "./App.css"
import {useCounter} from "./useCounter";
function App() {
  const {count, increase, decrease, reset} = useCounter()

  return (
    <div className="App">
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <br/>
      <h1>Your number is: {count}</h1>
    </div>
      
  );
}

export default App;