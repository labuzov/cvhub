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

export type CVPreferences = {
  fontSize: number;
  spacing: number;
  colorText: string;
  colorTextSecondary: string;
  colorPrimary: string;
  colorPrimaryLight: string;
}