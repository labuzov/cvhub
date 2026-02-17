import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';

import styles from './EditorForm.module.scss';
import { EditorTabs } from '../types';
import { Basic } from './Basic/Basic';
import { Summary } from './Summary/Summary';
import { Skills } from './Skills/Skills';


type Props = {
  selectedTab: EditorTabs;
  isPrevTabDisabled?: boolean;
  isNextTabDisabled?: boolean;
  onPrevTabClick?: () => void;
  onNextTabClick?: () => void;
}

export const EditorForm = ({
  selectedTab, isPrevTabDisabled, isNextTabDisabled, onPrevTabClick, onNextTabClick
}: Props) => {
  const { t } = useTranslation();

  const renderForm = useCallback(() => {
    switch (selectedTab) {
      case EditorTabs.Basic: return <Basic />;
      case EditorTabs.Summary: return <Summary />;
      case EditorTabs.Skills: return <Skills />;
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
          <Button
            variant="secondary"
            isDisabled={isPrevTabDisabled}
            onClick={onPrevTabClick}
          >
            {t('button.prevStep')}
          </Button>
          <Button
            isDisabled={isNextTabDisabled}
            onClick={onNextTabClick}
          >
            {t('button.nextStep')}
          </Button>
        </div>
      </div>
    </section>
  )
}
