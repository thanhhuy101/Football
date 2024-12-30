import InfoDetail from "./InfoDetail";
import MatchHistory from "./MatchHistory";
import Tranfers from "./Tranfers";

const PlayerProfile = () => {
  return (
    <div className="min-h-screen bg-[#0a1929] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <InfoDetail />

        {/* Transfer Value Chart */}
        <Tranfers />

        {/* Matches Section */}
        <MatchHistory />
      </div>
    </div>
  );
};

export default PlayerProfile;
