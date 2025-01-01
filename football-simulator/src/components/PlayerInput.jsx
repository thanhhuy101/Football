import PropTypes from "prop-types";
import { useState } from "react";

const PlayerInput = ({ players, newPlayer, setNewPlayer, addPlayer }) => {
  const [error, setError] = useState("");

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (players.some((player) => player.number === newPlayer.number)) {
      setError("Jersey number already exists.");
    } else {
      setError("");
      addPlayer();
    }
  };

  return (
    <div className="mb-4 space-y-2">
      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Jersey Number"
          value={newPlayer.number}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, number: e.target.value })
          }
          className="border p-2 mr-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Player
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {/* Player List */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">
          List Players ({players.length}/10)
        </h2>
        <div
          className={` ${players.length > 5 ? "grid grid-cols-2 gap-4" : ""}`}
        >
          {players.map((player) => (
            <div key={player.number} className="p-2 bg-gray-100">
              {player.name} (#{player.number}) - Defense: {player.defense}
              <div className="text-sm text-gray-600">
                Techniques: {player.techniques.map((t) => t.name).join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PlayerInput.propTypes = {
  players: PropTypes.array.isRequired,
  newPlayer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  setNewPlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default PlayerInput;
