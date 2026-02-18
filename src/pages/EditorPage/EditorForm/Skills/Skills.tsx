import { useTranslation } from 'react-i18next';
import { MdAdd } from 'react-icons/md';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Tags } from '@/components/Tags';

import styles from './Skills.module.scss';
import { useSkills } from './hooks/useSkills';


export const Skills = () => {
  const {
    title,
    skills,
    setTitle,
    addSkill,
    removeSkill,
  } = useSkills();

  const { t } = useTranslation();

  const tags = skills.map(skill => ({
    id: skill.title,
    title: skill.title + (skill.proficiency ? ` ${skill.proficiency}%` : '')
  }));

  return (
    <section
      className={styles.container}
    >
      <Paper>
        <div className={styles.form}>
          <FormField className={styles.field}>
            <Label>{t(`editor.field.skills`)}</Label>
            <Input
              value={title}
              placeholder={t(`editor.field.skills.placeholder`)}
              onChange={e => setTitle(e.currentTarget.value)}
            />
          </FormField>
        </div>
        <div className={styles.actions}>
          <Button
            className={styles.addBtn}
            onClick={() => addSkill(title)}
          >
            <MdAdd />
            {t(`button.add`)}
          </Button>
        </div>

        <div className={styles.tags}>
          <Tags
            tags={tags}
            onRemove={id => removeSkill(id)}
          />
        </div>
      </Paper>
    </section>
  );
}
