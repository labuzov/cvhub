import { useCVStore, type CVEducation } from '@/stores/CVStore';
import { getRandomId } from '@/utils/random';


export const useEducation = () => {
  const education = useCVStore(state => state.cv.education);
  const updateCVField = useCVStore(state => state.updateCVField);

  const updateEducationField = (id: string, field: keyof CVEducation, value: unknown) => {
    const newEdu = education.map(edu => {
      if (edu.id === id) return {
        ...edu,
        [field]: value
      }

      return edu;
    });

    updateCVField('education', newEdu);
  }

  const addEducation = () => {
    const newEdu: CVEducation[] = [...education, {
      id: getRandomId(),
      place: '',
      program: '',
      startDate: '',
      endDate: '',
      isCurrent: false
    }];

    updateCVField('education', newEdu);
  }

  const deleteEducation = (eduId: string) => {
    const newEdu = education.filter(({ id }) => id !== eduId);

    updateCVField('education', newEdu);
  }

  return {
    education,
    updateEducationField,
    addEducation,
    deleteEducation,
  }
}