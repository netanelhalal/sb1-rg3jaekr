import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Participant } from '../types/participant';

interface AdminState {
  isAdmin: boolean;
  participants: Participant[];
  login: (password: string) => boolean;
  logout: () => void;
  addParticipant: (participant: Participant) => void;
  updateParticipant: (index: number, participant: Participant) => void;
  removeParticipant: (index: number) => void;
}

// בפרויקט אמיתי, יש להשתמש בהצפנה חזקה יותר ולשמור את הסיסמה בשרת
const ADMIN_PASSWORD = '123456';

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAdmin: false,
      participants: [
        { name: "אברהם כהן", tickets: 15, lessons: 15 },
        { name: "יצחק לוי", tickets: 12, lessons: 12 },
        { name: "יעקב ישראל", tickets: 10, lessons: 10 },
        { name: "משה דוד", tickets: 8, lessons: 8 },
        { name: "שלמה רוזן", tickets: 7, lessons: 7 },
      ],
      login: (password: string) => {
        const isValid = password === ADMIN_PASSWORD;
        if (isValid) {
          set({ isAdmin: true });
        }
        return isValid;
      },
      logout: () => set({ isAdmin: false }),
      addParticipant: (participant) =>
        set((state) => ({
          participants: [...state.participants, participant],
        })),
      updateParticipant: (index, participant) =>
        set((state) => ({
          participants: state.participants.map((p, i) =>
            i === index ? participant : p
          ),
        })),
      removeParticipant: (index) =>
        set((state) => ({
          participants: state.participants.filter((_, i) => i !== index),
        })),
    }),
    {
      name: 'admin-storage',
    }
  )
);