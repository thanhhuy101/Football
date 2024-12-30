import matchList from "../matchList.json";

const MatchHistory = () => {
  const matchData = matchList.data.events.map((event) => ({
    date: new Date(event.startTimestamp * 1000).toLocaleDateString(),
    competition: event.tournament.name,
    homeTeam: event.homeTeam.shortName,
    awayTeam: event.awayTeam.shortName,
    homeScore: event.homeScore.current,
    awayScore: event.awayScore.current,
    homeLogo: event.homeTeam.logo,
    awayLogo: event.awayTeam.logo,
  }));

  return (
    <div className="bg-[#0f2744] p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">MATCHES</h2>
      <div className="space-y-4">
        {matchData.map((match, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1a365d] p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                <div>{match.date}</div>
                <div>{match.competition}</div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-row">
                  <img
                    src={match.homeLogo}
                    alt="flag"
                    className="w-7 h-7 mr-2 rounded-full"
                  />{" "}
                  <span>{match.homeTeam}</span>
                </div>
                <div className="flex flex-row">
                  <img
                    src={match.awayLogo}
                    alt="flag"
                    className="w-7 h-7 mr-2 rounded-full"
                  />
                  <span>{match.awayTeam}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`text-xl font-bold w-8 h-8 flex items-center justify-center rounded-md ${
                    match.homeScore > match.awayScore
                      ? "bg-blue-500"
                      : match.homeScore < match.awayScore
                      ? "bg-blue-900"
                      : "bg-blue-700"
                  }`}
                >
                  {match.homeScore}
                </span>
                <span
                  className={`text-xl font-bold w-8 h-8 flex items-center justify-center rounded-md ${
                    match.awayScore > match.homeScore
                      ? "bg-blue-500"
                      : match.awayScore < match.homeScore
                      ? "bg-blue-900"
                      : "bg-blue-700"
                  }`}
                >
                  {match.awayScore}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
