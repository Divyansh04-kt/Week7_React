import React from 'react';

function Scorebelow70({ players }) {
  const players70 = [];

  players.forEach((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      <ul>
        {players70.map((player, idx) => (
          <li key={idx}>
            Mr. {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;
