import { useState } from 'react';

import { useCVStore, type CVSkill } from '@/stores/CVStore';


export const useSkills = () => {
  const skills = useCVStore(state => state.cv.skills);
  const updateCVField = useCVStore(state => state.updateCVField);

  const [title, setTitle] = useState('');
  
  const addSkill = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const exists = skills.some(s => s.title.toLowerCase() === trimmed.toLowerCase());
    if (exists) return;
    
    const newSkills: CVSkill[] = [ ...skills, { title: trimmed } ];
    updateCVField('skills', newSkills);

    setTitle('');
  };
  
  const removeSkill = (title: string) => {
    const newSkills = skills.filter(s => s.title !== title);
    updateCVField('skills', newSkills)
  };

  return {
    skills,
    title,
    setTitle,
    addSkill,
    removeSkill,
  }
}