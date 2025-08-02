import React from 'react';

function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((player, idx) => (
        <li key={idx}>Mr. {player}</li>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;
