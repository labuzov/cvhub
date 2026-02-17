import { useTranslation } from 'react-i18next';

import { useCVStore } from '@/stores/CVStore';

import { Paper } from '@/components/Paper';
import { FormField } from '@/components/FormField';
import { Label } from '@/components/Label';
import { RichTextEditor } from '@/components/RichTextEditor';

import styles from './Summary.module.scss';


type Props = {
  
}

export const Summary = ({}: Props) => {
  const { cv, updateCVField } = useCVStore();
  const { t } = useTranslation();

  return (
    <section
      className={styles.container}
    >
      <Paper>
        <FormField>
          <Label>{t(`editor.field.summary`)}</Label>
          <RichTextEditor
            value={cv.summary}
            onChange={value => updateCVField('summary', value)}
          />
        </FormField>
      </Paper>
    </section>
  );
}
