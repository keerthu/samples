import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Counter App</h1>
      <h2>Current value is: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}
export default App;