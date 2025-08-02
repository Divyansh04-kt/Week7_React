import React from 'react';
import './App.css'; // <-- make sure your styles are defined here

function App() {
  const sr = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&q=80";

  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Conditional color class for Rent
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push("textRed");
  } else {
    colors.push("textGreen");
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
