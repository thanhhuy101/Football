import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import GameResult from "./components/GameResult";
import { TECHNIQUES } from "./constants/GameConstants";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [, setGameResults] = useState([]);
  const [techniqueStats, setTechniqueStats] = useState({});
  const [newPlayer, setNewPlayer] = useState({ name: "", number: "" });
  const [gameStarted, setGameStarted] = useState(false);

  // Initialize random techniques for a player
  const getRandomTechniques = () => {
    const shuffled = [...TECHNIQUES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  // Add new player
  const addPlayer = () => {
    if (players.length < 10 && newPlayer.name && newPlayer.number) {
      const player = {
        ...newPlayer,
        defense: Math.floor(Math.random() * 5) + 1,
        techniques: getRandomTechniques(),
        score: 0,
        techniquesUsed: [],
      };
      setPlayers([...players, player]);
      setNewPlayer({ name: "", number: "" });
    }
  };

  // Check if pass is successful
  const isPassSuccessful = (technique, defense) => {
    const random = Math.random() * 10;
    return random > technique.difficulty - defense;
  };

  // Play single game round
  const playGameRound = (activePlayers, bannedPlayerIndex) => {
    let currentPlayers = [...activePlayers];
    let techUsed = {};

    // Remove banned player
    currentPlayers.splice(bannedPlayerIndex, 1);

    while (currentPlayers.length > 1) {
      // Random passing player
      const passerIndex = Math.floor(Math.random() * currentPlayers.length);
      const passer = currentPlayers[passerIndex];

      // Random technique
      const technique =
        passer.techniques[Math.floor(Math.random() * passer.techniques.length)];
      techUsed[technique.name] = (techUsed[technique.name] || 0) + 1;

      // Check if pass is successful
      if (!isPassSuccessful(technique, passer.defense)) {
        // Failed pass - passer is out
        currentPlayers.splice(passerIndex, 1);
      }

      // Update player's score
      const scoreIncrement = technique.difficulty;
      passer.score += 10 - bannedPlayerIndex + scoreIncrement;
    }

    return { remainingPlayer: currentPlayers[0], techniqueUsage: techUsed };
  };

  // Play full game (10 rounds)
  const playFullGame = () => {
    const results = [];
    const allTechUsage = {};

    // Play 10 rounds with different initial banned players
    for (let i = 0; i < 10; i++) {
      const roundResult = playGameRound([...players], i);
      results.push(roundResult);

      // Aggregate technique usage
      Object.entries(roundResult.techniqueUsage).forEach(([tech, count]) => {
        allTechUsage[tech] = (allTechUsage[tech] || 0) + count;
      });
    }

    setGameResults(results);
    setTechniqueStats(allTechUsage);
    setGameStarted(true);
  };

  const resetGame = () => {
    setNewPlayer({ name: "", number: "" });
    setGameStarted(false);
    setGameResults([]);
    setTechniqueStats({});
    setPlayers([]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Football Game Simulation</h1>

      <PlayerInput
        players={players}
        newPlayer={newPlayer}
        setNewPlayer={setNewPlayer}
        addPlayer={addPlayer}
      />

      {/* Start Game Button */}
      {players.length === 10 && !gameStarted && (
        <button
          onClick={playFullGame}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Start Game
        </button>
      )}

      {gameStarted && (
        <>
          <GameResult
            gameStarted={gameStarted}
            players={players}
            techniqueStats={techniqueStats}
          />
          <button
            onClick={resetGame}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
          >
            Reset Game
          </button>
        </>
      )}
    </div>
  );
};

export default App;
