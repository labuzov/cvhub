import { useCallback } from 'react';

import type { CVInfo, CVPreferences, CVTemplate } from '@/stores/CVStore';

import styles from './CV.module.scss';
import { Default } from './variants/Default/Default';


type Props = {
  cv: CVInfo;
  template: CVTemplate;
  preferences: CVPreferences;
};

export const CV = ({ cv, template, preferences }: Props) => {

  const renderVariant = useCallback(() => {
    switch (template.name) {
      case 'default': return <Default cv={cv} />
      default: return null;
    }
  }, [cv, template.name]);

  const {
    fontSize, spacing, colorPrimary, colorPrimaryLight, colorText, colorTextSecondary, colorBackground
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
        '--cv-bg': colorBackground,
      } as React.CSSProperties}
    >
      {renderVariant()}
    </div>
  );
}
