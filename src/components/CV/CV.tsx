import { useCallback } from 'react';

import type { CVInfo } from '@/stores/CVStore';

import styles from './CV.module.scss';
import { Default } from './variants/Default/Default';


type Props = {
  cv: CVInfo;
  variant: 'default';
  spacing?: number;
  fontSize?: number;
};

export const CV = ({ cv, variant, spacing = 4, fontSize = 14 }: Props) => {

  const renderVariant = useCallback(() => {
    switch (variant) {
      case 'default': return <Default cv={cv} />
      default: return null;
    }
  }, [cv, variant]);

  return (
    <div
      className={styles.cv}
      style={{
        '--cv-font-size': `${fontSize}px`,
        '--cv-spacing': `${spacing}px`,
        '--cv-primary': `var(--primary)`,
        '--cv-primary-light': `var(--primary-50)`,
        '--cv-text': `var(--text)`,
        '--cv-text-secondary': `var(--text-secondary)`,
      } as React.CSSProperties}
    >
      {renderVariant()}
    </div>
  );
}
