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

export const enum CVPreferenceValue {
  FontSize = 'fontSize',
  Spacing = 'spacing',
  ColorText = 'colorText',
  ColorTextSecondary = 'colorTextSecondary',
  ColorPrimary = 'colorPrimary',
  ColorPrimaryLight = 'colorPrimaryLight',
  ColorBackground = 'colorBackground',
}

export type CVPreferences = {
  [CVPreferenceValue.FontSize]: number;
  [CVPreferenceValue.Spacing]: number;
  [CVPreferenceValue.ColorText]: string;
  [CVPreferenceValue.ColorTextSecondary]: string;
  [CVPreferenceValue.ColorPrimary]: string;
  [CVPreferenceValue.ColorPrimaryLight]: string;
  [CVPreferenceValue.ColorBackground]: string;
}

export const cvPreferencesColors = [
  CVPreferenceValue.ColorPrimary,
  CVPreferenceValue.ColorPrimaryLight,
  CVPreferenceValue.ColorText,
  CVPreferenceValue.ColorTextSecondary,
  CVPreferenceValue.ColorBackground,
];

export type CVTemplate = {
  name: string;
  defaultPreferences: CVPreferences;
}