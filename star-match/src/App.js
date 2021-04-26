import React, { useState } from "react";
import "./App.css";

import Game from "./components/Game";

const App = () => {
  // STAR MATCH - V9

  const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
  };

  return <StarMatch />;
};

export default App;
