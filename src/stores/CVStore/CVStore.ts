import { create } from 'zustand';

import { cvTemplates } from '@/constants/cvTemplates';

import type { CVInfo, CVPreferences, CVTemplate } from './types';


type State = {
  cv: CVInfo;
  preferences: CVPreferences;
  template: CVTemplate;
  updateCVField: (field: keyof CVInfo, value?: unknown) => void;
  updatePreferences: (field: keyof CVPreferences, value?: unknown) => void;
  setTemplate: (template: CVTemplate) => void;
  resetTemplatePreferences: () => void;
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

  preferences: cvTemplates[0].defaultPreferences,
  template: cvTemplates[0],

  updateCVField: (field: keyof CVInfo, value?: unknown) => {
    set(state => {
      return {
        cv: { ...state.cv, [field]: value }
      }
    });
  },

  updatePreferences: (field: keyof CVPreferences, value?: unknown) => {
    set(state => {
      return {
        preferences: { ...state.preferences, [field]: value }
      }
    });
  },

  setTemplate: (template: CVTemplate) => {
    set(() => {
      return {
        template,
        preferences: { ...template.defaultPreferences }
      }
    });
  },

  resetTemplatePreferences: () => {
    set(state => {
      return {
        preferences: {
          ...state.preferences,
          ...state.template.defaultPreferences
        }
      }
    });
  }
}));
