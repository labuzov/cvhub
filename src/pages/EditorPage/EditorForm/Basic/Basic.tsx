import { useTranslation } from 'react-i18next';

import { useCVStore, type CVInfo } from '@/stores/CVStore';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';

import styles from './Basic.module.scss';


type Props = {
  
}

export const Basic = ({}: Props) => {
  const { cv, updateCVField } = useCVStore();
  const { t } = useTranslation();

  const textFields: (keyof CVInfo)[] = ['name', 'designation', 'email', 'phone', 'url', 'location'];

  return (
    <section
      className={styles.container}
    >
      <Paper>
        {textFields.map(field => (
          <FormField key={field}>
            <Label>{t(`editor.field.${field}`)}</Label>
            <Input
              value={cv[field] as string}
              onChange={e => updateCVField(field, e.currentTarget.value)}
            />
          </FormField>
        ))}
      </Paper>
    </section>
  );
}
