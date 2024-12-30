import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const transferData = [
  { year: "10", value: 22, anotherValue: 30 },
  { year: "13", value: 35, anotherValue: 40 },
  { year: "14", value: 40, anotherValue: 45 },
  { year: "16", value: 25, anotherValue: 35 },
  { year: "17", value: 22, anotherValue: 30 },
  { year: "19", value: 20, anotherValue: 25 },
  { year: "20", value: 66, anotherValue: 70 },
  { year: "22", value: 22, anotherValue: 28 },
];

const fakeListData = [
  { id: 1, country: "Argentina", date: "30 Jun 2026", status: "End of loan" },
  { id: 2, country: "Argentina", date: "15 Jul 2024", status: "End of loan" },
  { id: 3, country: "Argentina", date: "10 Aug 2025", status: "End of loan" },
  { id: 4, country: "Argentina", date: "20 Sep 2023", status: "End of loan" },
  { id: 5, country: "Argentina", date: "05 Oct 2022", status: "End of loan" },
];

const Tranfers = () => {
  return (
    <div className="bg-[#0f2744] p-6 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4">TRANSFER VALUE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full overflow-hidden">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart width={400} height={200} data={transferData}>
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis stroke="#fff" tickFormatter={(value) => `${value} M`} />
              <Tooltip />
              <Legend layout="vertical" />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6" }}
                name="Transfer fee"
              />
              <Line
                type="monotone"
                dataKey="anotherValue"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ fill: "#f97316" }}
                name="Current player value"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col">
          <div className="space-y-4 divide-y">
            {fakeListData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 rounded"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://c7.alamy.com/comp/2M6X9BK/argentina-year-2022-flag-and-logo-argentina-football-association-world-champion-2022-qatar-with-three-world-champion-stars-illustration-2M6X9BK.jpg"
                    alt="flag"
                    className="w-7 h-7 mr-2 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span>{item.country}</span>
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm font-bold text-green-500">-</span>
                  <span className="text-sm text-green-500">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tranfers;
