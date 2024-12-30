import PropTypes from "prop-types";

const PlayerInput = ({ players, newPlayer, setNewPlayer, addPlayer }) => {
  if (players.length >= 10) return null;

  return (
    <div className="mb-4 space-y-2">
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
        onChange={(e) => setNewPlayer({ ...newPlayer, number: e.target.value })}
        className="border p-2 mr-2"
      />
      <button
        onClick={addPlayer}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Player
      </button>

      {/* Player List */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Players ({players.length}/10)</h2>
        <div className="space-y-2">
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
