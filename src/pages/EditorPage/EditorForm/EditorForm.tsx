import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/Typography';
import { EditorTabs } from '../types';
import { Basic } from './Basic/Basic';
import { Summary } from './Summary/Summary';
import styles from './EditorForm.module.scss';


type Props = {
  selectedTab: EditorTabs;
  isPrevTabDisabled?: boolean;
  isNextTabDisabled?: boolean;
  onPrevTabClick?: () => void;
  onNextTabClick?: () => void;
}

export const EditorForm = ({ selectedTab }: Props) => {
  const { t } = useTranslation();

  const renderForm = useCallback(() => {
    switch (selectedTab) {
      case EditorTabs.Basic: return <Basic />;
      case EditorTabs.Summary: return <Summary />;
      default: return null;
    }
  }, [selectedTab]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Typography
            className={styles.title}
            variant="h2"
          >
            {t(`editor.form.${selectedTab}.title`)}
          </Typography>
          <Typography
            className={styles.description}
            color="secondary"
          >
            {t(`editor.form.${selectedTab}.description`)}
          </Typography>
        </div>

        <div className={styles.form}>
          {renderForm()}
        </div>

        <div className={styles.actions}>

        </div>
      </div>
    </section>
  )
}
