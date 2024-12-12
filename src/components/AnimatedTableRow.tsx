import React from 'react';
import { useAnimatedEntry } from '../hooks/useAnimatedEntry';
import { Participant } from '../types/participant';

interface AnimatedTableRowProps {
  participant: Participant;
  index: number;
  getRankIcon: (index: number) => React.ReactNode;
}

export default function AnimatedTableRow({ participant, index, getRankIcon }: AnimatedTableRowProps) {
  const { ref, style } = useAnimatedEntry({
    delay: index * 0.1,
    duration: 0.6,
    threshold: 0.2,
  });

  return (
    <tr
      ref={ref}
      style={style}
      className="border-t border-blue-100 hover:bg-blue-50/50 transition-colors"
    >
      <td className="py-4 px-6">{getRankIcon(index)}</td>
      <td className="py-4 px-6 font-medium">{participant.name}</td>
      <td className="py-4 px-6">{participant.lessons}</td>
      <td className="py-4 px-6">{participant.tickets}</td>
    </tr>
  );
}