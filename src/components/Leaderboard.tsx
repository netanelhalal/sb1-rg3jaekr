import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';
import AnimatedTableRow from './AnimatedTableRow';
import '../styles/animations.css';

export default function Leaderboard() {
  const participants = useAdminStore((state) => state.participants);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="inline text-yellow-500" size={24} />;
      case 1:
        return <Award className="inline text-gray-400" size={24} />;
      case 2:
        return <Medal className="inline text-amber-600" size={24} />;
      default:
        return index + 1;
    }
  };

  const sortedParticipants = [...participants].sort((a, b) => b.tickets - a.tickets);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-right mb-8 text-blue-900">טבלת המובילים</h2>
      <div className="overflow-hidden rounded-xl border border-blue-100">
        <table className="w-full text-right">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-4 px-6 text-blue-900">דירוג</th>
              <th className="py-4 px-6 text-blue-900">שם</th>
              <th className="py-4 px-6 text-blue-900">שיעורים</th>
              <th className="py-4 px-6 text-blue-900">כרטיסים</th>
            </tr>
          </thead>
          <tbody>
            {sortedParticipants.map((participant, index) => (
              <AnimatedTableRow
                key={participant.name}
                participant={participant}
                index={index}
                getRankIcon={getRankIcon}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}