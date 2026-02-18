import { useCVStore, type CVExperience } from '@/stores/CVStore';
import { getRandomId } from '@/utils/random';


export const useWorkExperience = () => {
  const experience = useCVStore(state => state.cv.experience);
  const updateCVField = useCVStore(state => state.updateCVField);

  const updateExpField = (id: string, field: string, value: unknown) => {
    const newExp = experience.map(exp => {
      if (exp.id === id) return {
        ...exp,
        [field]: value
      }

      return exp;
    });

    updateCVField('experience', newExp);
  }

  const addExp = () => {
    const newExp: CVExperience[] = [...experience, {
      id: getRandomId(),
      designation: '',
      organization: '',
      description: '',
      startDate: '',
      endDate: '',
      isCurrent: false
    }];

    updateCVField('experience', newExp);
  }

  const deleteExp = (expId: string) => {
    const newExp = experience.filter(({ id }) => id !== expId);

    updateCVField('experience', newExp);
  }

  return {
    experience,
    updateExpField,
    addExp,
    deleteExp,
  }
}