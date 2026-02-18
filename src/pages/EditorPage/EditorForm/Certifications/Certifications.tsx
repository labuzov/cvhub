import { useTranslation } from 'react-i18next';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import styles from './Certifications.module.scss';
import { useCertifications } from './hooks/useCertifications';


export const Certifications = () => {
  const {
    certifications,
    updateCertField,
    addCert,
    deleteCert,
  } = useCertifications();

  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.content}>
        {certifications.map(cert => (
          <Paper
            key={cert.id}
            className={styles.paper}
          >
            <Button
              isIconOnly
              className={styles.deleteBtn}
              variant="ghost"
              onClick={() => deleteCert(cert.id)}
            >
              <MdDeleteOutline />
            </Button>
            <div className={styles.form}>
              <div className={styles.rows}>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.certName`)}</Label>
                  <Input
                    value={cert.certName}
                    placeholder={t(`editor.field.certName.placeholder`)}
                    onChange={e => updateCertField(cert.id, 'certName', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.certOrganization`)}</Label>
                  <Input
                    value={cert.certOrganization}
                    placeholder={t(`editor.field.certOrganization.placeholder`)}
                    onChange={e => updateCertField(cert.id, 'certOrganization', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.date`)}</Label>
                  <Input
                    value={cert.date}
                    placeholder={t(`editor.field.date.placeholder`)}
                    onChange={e => updateCertField(cert.id, 'date', e.currentTarget.value)}
                  />
                </FormField>
              </div>
            </div>
          </Paper>
        ))}
      </div>

      <div className={styles.actions}>
        <Button
          variant="primary"
          onClick={addCert}
        >
          <MdAdd />
          {t('button.addNew')}
        </Button>
      </div>
    </section>
  );
}
