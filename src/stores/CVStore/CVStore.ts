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
    id: string;
    designation: string;
    organization: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
  }[];
}

type CVState = {
  cv: CVInfo;
  updateCVField: (field: keyof CVInfo, value?: unknown) => void;
}

export const useCVStore = create<CVState>(set => ({
  cv: {
    name: '',
    designation: '',
    email: '',
    url: '',
    location: '',
    phone: '',
    summary: '',
    skills: [
      { title: 'React' },
      { title: 'TypeScript', proficiency: 90 }
    ],
    experience: [
      {
        id: '1',
        designation: 'Senior Frontend Developer',
        organization: 'Super Solutions',
        description: 'some description',
        startDate: '01.11.2021',
        isCurrent: true
      }
    ],
  },

  updateCVField: (field: keyof CVInfo, value?: unknown) => {
    set(state => {
      return {
        cv: { ...state.cv, [field]: value }
      }
    });
  },
}));
