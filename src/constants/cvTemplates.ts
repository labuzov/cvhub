import { type CVTemplate } from '@/stores/CVStore';

export const cvTemplates: CVTemplate[] = [
  {
    name: 'default',
    defaultPreferences: {
      fontSize: 14,
      spacing: 4,
      colorPrimary: '#3390ec',
      colorPrimaryLight: '#e6f2fc',
      colorText: '#333333',
      colorTextSecondary: '#9e9e9e',
    }
  }
];