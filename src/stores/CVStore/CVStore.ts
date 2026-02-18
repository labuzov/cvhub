import { create } from 'zustand';

import type { CVInfo, CVPreferences } from './types';


type State = {
  cv: CVInfo;
  preferences: CVPreferences;
  updateCVField: (field: keyof CVInfo, value?: unknown) => void;
}

export const useCVStore = create<State>(set => ({
  cv: {
    name: '',
    designation: '',
    email: '',
    url: '',
    location: '',
    phone: '',
    summary: '',
    skills: [],
    experience: [],
    education: [],
    certifications: [],
  },

  preferences: {
    fontSize: 14,
    spacing: 4,
    colorPrimary: '#3390ec',
    colorPrimaryLight: '#e6f2fc',
    colorText: '#333333',
    colorTextSecondary: '#9e9e9e',
  },

  updateCVField: (field: keyof CVInfo, value?: unknown) => {
    set(state => {
      return {
        cv: { ...state.cv, [field]: value }
      }
    });
  },
}));
