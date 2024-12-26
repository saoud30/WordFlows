import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  points: number;
  earnedPoints: number;
  bestWPM: number;
  totalTests: number;
  streak: number;
  totalTime: number;
  setPoints: (points: number) => void;
  addEarnedPoints: (points: number) => void;
  updateBestWPM: (wpm: number) => void;
  incrementTotalTests: () => void;
  updateStreak: (completed: boolean) => void;
  addTime: (seconds: number) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      points: 0,
      earnedPoints: 0,
      bestWPM: 0,
      totalTests: 0,
      streak: 0,
      totalTime: 0,
      setPoints: (points) => set({ points }),
      addEarnedPoints: (points) =>
        set((state) => ({ earnedPoints: state.earnedPoints + points })),
      updateBestWPM: (wpm) =>
        set((state) => ({ bestWPM: Math.max(state.bestWPM, wpm) })),
      incrementTotalTests: () =>
        set((state) => ({ totalTests: state.totalTests + 1 })),
      updateStreak: (completed) =>
        set((state) => ({
          streak: completed ? state.streak + 1 : 0,
        })),
      addTime: (seconds) =>
        set((state) => ({ totalTime: state.totalTime + seconds })),
    }),
    {
      name: 'game-storage',
    }
  )
);