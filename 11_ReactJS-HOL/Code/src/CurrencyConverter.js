import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency] = useState('Euro');

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = amount * 80;
    alert(`Converting to Euro Amount is ${converted}`);
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <label>Amount:</label><br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br /><br />

        <label>Currency:</label><br />
        <textarea value={currency} readOnly />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
