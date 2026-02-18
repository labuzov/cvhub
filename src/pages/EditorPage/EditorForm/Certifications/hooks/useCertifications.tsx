import { useCVStore, type CVCertification } from '@/stores/CVStore';
import { getRandomId } from '@/utils/random';


export const useCertifications = () => {
  const certifications = useCVStore(state => state.cv.certifications);
  const updateCVField = useCVStore(state => state.updateCVField);

  const updateCertField = (id: string, field: keyof CVCertification, value: unknown) => {
    const newCert = certifications.map(cert => {
      if (cert.id === id) return {
        ...cert,
        [field]: value
      }

      return cert;
    });

    updateCVField('certifications', newCert);
  }

  const addCert = () => {
    const newCert: CVCertification[] = [...certifications, {
      id: getRandomId(),
      certName: '',
      certOrganization: '',
      date: '',
    }];

    updateCVField('certifications', newCert);
  }

  const deleteCert = (certId: string) => {
    const newCert = certifications.filter(({ id }) => id !== certId);

    updateCVField('certifications', newCert);
  }

  return {
    certifications,
    updateCertField,
    addCert,
    deleteCert,
  }
}