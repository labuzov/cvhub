import { useTranslation } from 'react-i18next';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

import styles from './Education.module.scss';
import { useEducation } from './hooks/useEducation';


export const Education = () => {
  const {
    education,
    updateEducationField,
    addEducation,
    deleteEducation,
  } = useEducation();

  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.content}>
        {education.map(edu => (
          <Paper
            key={edu.id}
            className={styles.paper}
          >
            <Button
              isIconOnly
              className={styles.deleteBtn}
              variant="ghost"
              onClick={() => deleteEducation(edu.id)}
            >
              <MdDeleteOutline />
            </Button>
            <div className={styles.form}>
              <div className={styles.rows}>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.place`)}</Label>
                  <Input
                    value={edu.place}
                    placeholder={t(`editor.field.place.placeholder`)}
                    onChange={e => updateEducationField(edu.id, 'place', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.program`)}</Label>
                  <Input
                    value={edu.program}
                    placeholder={t(`editor.field.program.placeholder`)}
                    onChange={e => updateEducationField(edu.id, 'program', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.startDate`)}</Label>
                  <Input
                    value={edu.startDate}
                    placeholder={t(`editor.field.startDate.placeholder`)}
                    onChange={e => updateEducationField(edu.id, 'startDate', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.endDate`)}</Label>
                  <Input
                    value={edu.endDate}
                    placeholder={t(`editor.field.endDate.placeholder`)}
                    disabled={edu.isCurrent}
                    onChange={e => updateEducationField(edu.id, 'endDate', e.currentTarget.value)}
                  />
                </FormField>
              </div>

              <div className={styles.checkbox}>
                <Checkbox
                  isSelected={edu.isCurrent}
                  onChange={value => updateEducationField(edu.id, 'isCurrent', value)}
                >
                  {t('editor.field.isCurrentEducation')}
                </Checkbox>
              </div>
            </div>
          </Paper>
        ))}
      </div>

      <div className={styles.actions}>
        <Button
          variant="primary"
          onClick={addEducation}
        >
          <MdAdd />
          {t('button.addNew')}
        </Button>
      </div>
    </section>
  );
}
