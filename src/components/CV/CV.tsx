import { useCallback } from 'react';

import type { CVInfo, CVPreferences } from '@/stores/CVStore';

import styles from './CV.module.scss';
import { Default } from './variants/Default/Default';


type Props = {
  cv: CVInfo;
  variant: 'default';
  preferences: CVPreferences;
};

export const CV = ({ cv, variant, preferences }: Props) => {

  const renderVariant = useCallback(() => {
    switch (variant) {
      case 'default': return <Default cv={cv} />
      default: return null;
    }
  }, [cv, variant]);

  const {
    fontSize, spacing, colorPrimary, colorPrimaryLight, colorText, colorTextSecondary
  } = preferences;

  return (
    <div
      className={styles.cv}
      style={{
        '--cv-font-size': `${fontSize}px`,
        '--cv-spacing': `${spacing}px`,
        '--cv-primary': colorPrimary,
        '--cv-primary-light': colorPrimaryLight,
        '--cv-text': colorText,
        '--cv-text-secondary': colorTextSecondary,
      } as React.CSSProperties}
    >
      {renderVariant()}
    </div>
  );
}
