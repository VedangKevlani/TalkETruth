import React from 'react';

type Props = {
  score: number;
};

const ECSCard: React.FC<Props> = ({ score }) => {
  return (
    <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Your ECS Today</h2>
      <p className="text-4xl font-extrabold">{score}/100</p>
      <p className="text-sm mt-1">Keep speaking with confidence!</p>
    </div>
  );
};


export default ECSCard;
