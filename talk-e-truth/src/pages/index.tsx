import { useState } from 'react';
import ECSCard from '../components/ECSCard';
import Recorder from '../components/Recorder';

export default function Home() {
  const [ecsScore, setEcsScore] = useState(0);

const calculateECS = (blob: Blob) => {
  // Placeholder logic: random score for now
  return Math.floor(Math.random() * 100);
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1>Talk e Truth</h1>
      <ECSCard score={ecsScore} />
      <Recorder onStop={(blob) => setEcsScore(calculateECS(blob))} />
    </main>
  );
}
