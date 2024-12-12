import React, { useState } from 'react';
import { useAdminStore } from '../store/adminStore';
import { Participant } from '../types/participant';

export default function AdminPanel() {
  const { participants, addParticipant, updateParticipant, removeParticipant, logout } = useAdminStore();
  const [newParticipant, setNewParticipant] = useState<Participant>({
    name: '',
    tickets: 0,
    lessons: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newParticipant.name) {
      addParticipant(newParticipant);
      setNewParticipant({ name: '', tickets: 0, lessons: 0 });
    }
  };

  const handleUpdate = (index: number, field: keyof Participant, value: string | number) => {
    const updatedParticipant = { ...participants[index] };
    if (field === 'name') {
      updatedParticipant[field] = value as string;
    } else {
      updatedParticipant[field] = Number(value);
    }
    updateParticipant(index, updatedParticipant);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          יציאה
        </button>
        <h2 className="text-2xl font-bold text-blue-800">ניהול משתתפים</h2>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            value={newParticipant.name}
            onChange={(e) => setNewParticipant({ ...newParticipant, name: e.target.value })}
            placeholder="שם המשתתף"
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            value={newParticipant.lessons}
            onChange={(e) => setNewParticipant({ ...newParticipant, lessons: Number(e.target.value) })}
            placeholder="מספר שיעורים"
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            value={newParticipant.tickets}
            onChange={(e) => setNewParticipant({ ...newParticipant, tickets: Number(e.target.value) })}
            placeholder="מספר כרטיסים"
            className="p-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            הוסף משתתף
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-blue-100">
              <th className="pb-4 text-right">שם</th>
              <th className="pb-4 text-right">שיעורים</th>
              <th className="pb-4 text-right">כרטיסים</th>
              <th className="pb-4 text-right">פעולות</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3">
                  <input
                    type="text"
                    value={participant.name}
                    onChange={(e) => handleUpdate(index, 'name', e.target.value)}
                    className="p-1 border rounded-md w-full"
                  />
                </td>
                <td className="py-3">
                  <input
                    type="number"
                    value={participant.lessons}
                    onChange={(e) => handleUpdate(index, 'lessons', e.target.value)}
                    className="p-1 border rounded-md w-full"
                  />
                </td>
                <td className="py-3">
                  <input
                    type="number"
                    value={participant.tickets}
                    onChange={(e) => handleUpdate(index, 'tickets', e.target.value)}
                    className="p-1 border rounded-md w-full"
                  />
                </td>
                <td className="py-3">
                  <button
                    onClick={() => removeParticipant(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
                  >
                    מחק
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}