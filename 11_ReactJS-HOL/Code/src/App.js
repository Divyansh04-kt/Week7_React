import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello from React!");
  };

  const sayWelcome = () => {
    alert("Welcome to React Events!");
  };

  const handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={sayWelcome}>Say welcome</button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>Click on me</button>

      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
