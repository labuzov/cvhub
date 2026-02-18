import { useTranslation } from 'react-i18next';
import { MdAdd, MdDeleteOutline } from 'react-icons/md';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { RichTextEditor } from '@/components/RichTextEditor';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

import styles from './Experience.module.scss';
import { useWorkExperience } from './hooks/useWorkExperience';


export const Experience = () => {
  const {
    experience,
    updateExpField,
    addExp,
    deleteExp,
  } = useWorkExperience();

  const { t } = useTranslation();

  return (
    <section>
      <div className={styles.content}>
        {experience.map(exp => (
          <Paper
            key={exp.id}
            className={styles.paper}
          >
            <Button
              isIconOnly
              className={styles.deleteBtn}
              variant="ghost"
              onClick={() => deleteExp(exp.id)}
            >
              <MdDeleteOutline />
            </Button>
            <div className={styles.form}>
              <div className={styles.rows}>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.designation`)}</Label>
                  <Input
                    value={exp.designation}
                    placeholder={t(`editor.field.designation.placeholder`)}
                    onChange={e => updateExpField(exp.id, 'designation', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.organization`)}</Label>
                  <Input
                    value={exp.organization}
                    placeholder={t(`editor.field.organization.placeholder`)}
                    onChange={e => updateExpField(exp.id, 'organization', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.startDate`)}</Label>
                  <Input
                    value={exp.startDate}
                    placeholder={t(`editor.field.startDate.placeholder`)}
                    onChange={e => updateExpField(exp.id, 'startDate', e.currentTarget.value)}
                  />
                </FormField>
                <FormField className={styles.field}>
                  <Label>{t(`editor.field.endDate`)}</Label>
                  <Input
                    value={exp.endDate}
                    placeholder={t(`editor.field.endDate.placeholder`)}
                    disabled={exp.isCurrent}
                    onChange={e => updateExpField(exp.id, 'endDate', e.currentTarget.value)}
                  />
                </FormField>
              </div>

              <div className={styles.checkbox}>
                <Checkbox
                  isSelected={exp.isCurrent}
                  onChange={value => updateExpField(exp.id, 'isCurrent', value)}
                >
                  {t('editor.field.isCurrentWork')}
                </Checkbox>
              </div>

              <FormField className={styles.field}>
                <Label>{t(`editor.field.description`)}</Label>
                <RichTextEditor
                  value={exp.description}
                  onChange={value => updateExpField(exp.id, 'description', value)}
                />
              </FormField>
            </div>
          </Paper>
        ))}
      </div>

      <div className={styles.actions}>
        <Button
          variant="primary"
          onClick={addExp}
        >
          <MdAdd />
          {t('button.addNew')}
        </Button>
      </div>
    </section>
  );
}
