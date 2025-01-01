import PropTypes from "prop-types";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const GameResults = ({ players, techniqueStats }) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const chartData = Object.entries(techniqueStats)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Game Results</h2>

      {/* Player Rankings */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Players Ranking</h3>
        <div className="grid grid-cols-2 gap-4">
          {sortedPlayers.map((player, index) => (
            <div
              key={player.number}
              className={`p-2 ${index < 3 ? "font-bold bg-blue-100" : ""}`}
            >
              TOP {index + 1}: {player.name} (#{player.number}) - Score:{" "}
              {player.score}
            </div>
          ))}
        </div>
      </div>

      {/* Technique Usage Chart */}
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Most Used Techniques</h3>
        <div className="w-full overflow-x-auto">
          <BarChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={45} textAnchor="start" height={100} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

GameResults.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  techniqueStats: PropTypes.object.isRequired,
};

export default GameResults;
