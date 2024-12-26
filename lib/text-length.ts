export type TextLength = 'short' | 'medium' | 'long';

export interface TextLengthConfig {
  label: string;
  icon: string;
  description: string;
  wordRange: {
    min: number;
    max: number;
  };
}

export const textLengthSettings: Record<TextLength, TextLengthConfig> = {
  short: {
    label: 'Short',
    icon: 'text',
    description: 'Brief sentences (1-2 lines)',
    wordRange: { min: 5, max: 15 }
  },
  medium: {
    label: 'Medium',
    icon: 'text-quote',
    description: 'Paragraphs (3-5 lines)',
    wordRange: { min: 16, max: 50 }
  },
  long: {
    label: 'Long',
    icon: 'file-text',
    description: 'Full documents',
    wordRange: { min: 51, max: 200 }
  }
};