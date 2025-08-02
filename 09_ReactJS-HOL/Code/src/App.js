import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import { OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';
import { players } from './PlayerData';
import { IndianPlayers as IndianTeam } from './TeamData';

function App() {
  var flag = false; // Change this to false to show IndianPlayers screen

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        <hr />
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianTeam} />
      </div>
    );
  }
}

export default App;
