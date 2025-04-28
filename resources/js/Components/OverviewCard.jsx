import React from 'react';

const OverviewCard = ({ value, label }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

export default OverviewCard;
