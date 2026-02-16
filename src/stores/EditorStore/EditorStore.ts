import { create } from 'zustand';


export type CVInfo = {
  name: string;
  designation: string;
  email: string;
  url: string;
  location: string;
  phone: string;
  summary: string;

  skills: {
    title: string;
    proficiency?: number;
  }[];

  experience: {
    designation: string;
    organisation: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    description: string;
  }[];
}

type EditorState = {
  cv: CVInfo;
  updateCVField: (field: keyof CVInfo, value?: unknown) => void;
}

export const useEditorStore = create<EditorState>(set => ({
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
  },

  updateCVField: (field: keyof CVInfo, value?: unknown) => {
    set(state => {
      return {
        cv: { ...state.cv, [field]: value }
      }
    });
  },
}));
