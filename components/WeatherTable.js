import React from "react";

const WeatherTable = ({ data }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Max Temp (°C)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Min Temp (°C)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mean Temp (°C)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.dates.map((date, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.maxTemps[index]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.minTemps[index]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {data.meanTemps[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
