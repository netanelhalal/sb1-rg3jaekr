import React from 'react';
import { Calendar, Gift, Users, Clock } from 'lucide-react';
import InfoCard from './InfoCard';

export default function InfoCards() {
  const cards = [
    {
      Icon: Calendar,
      title: 'מועד ההגרלה',
      content: '1 בינואר 2026'
    },
    {
      Icon: Gift,
      title: 'כרטיסי הגרלה',
      content: 'כרטיס לכל שיעור'
    },
    {
      Icon: Users,
      title: 'השתתפות',
      content: 'פתוח לכולם'
    },
    {
      Icon: Clock,
      title: 'זמני שיעורים',
      content: 'ימי רביעי 21:00-22:00'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {cards.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
}