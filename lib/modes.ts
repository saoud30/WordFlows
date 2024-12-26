// Difficulty levels
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export const difficultySettings = {
  beginner: {
    timeLimit: 60,
    textLength: 'short',
    allowedMistakes: 5
  },
  intermediate: {
    timeLimit: 120,
    textLength: 'medium',
    allowedMistakes: 3
  },
  advanced: {
    timeLimit: 180,
    textLength: 'long',
    allowedMistakes: 1
  }
};

// Game modes
export type GameMode = 
  | 'standard'
  | 'timeAttack'
  | 'wordBurst'
  | 'marathon'
  | 'errorFocus'
  | 'programming'
  | 'professional';

export const gameModeSettings = {
  standard: {
    timeLimit: 60,
    description: 'Classic typing test'
  },
  timeAttack: {
    timeLimit: 30,
    description: 'Race against time'
  },
  wordBurst: {
    timeLimit: 15,
    description: 'Quick word sprints'
  },
  marathon: {
    timeLimit: 300,
    description: 'Long form typing'
  },
  errorFocus: {
    timeLimit: 60,
    description: 'Practice problem characters'
  },
  programming: {
    timeLimit: 120,
    description: 'Code snippet practice'
  },
  professional: {
    timeLimit: 180,
    description: 'Business writing practice'
  }
};