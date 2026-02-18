export type CVInfo = {
  name: string;
  designation: string;
  email: string;
  url: string;
  location: string;
  phone: string;
  summary: string;
  skills: CVSkill[];
  experience: CVExperience[];
  education: CVEducation[];
  certifications: CVCertification[];
}

export type CVSkill = {
  title: string;
  proficiency?: number;
}

export type CVExperience = {
  id: string;
  designation: string;
  organization: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
}

export type CVEducation = {
  id: string;
  place: string;
  program: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export type CVCertification = {
  id: string;
  certName: string;
  certOrganization: string;
  date: string;
}

export type CVPreferences = {
  fontSize: number;
  spacing: number;
  colorText: string;
  colorTextSecondary: string;
  colorPrimary: string;
  colorPrimaryLight: string;
}