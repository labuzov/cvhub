import { useTranslation } from 'react-i18next';
import { MdArrowBack } from 'react-icons/md';

import type { OverlayComponentProps } from '@/stores/OverlayComponentsStore/types';
import type { CVInfo, CVPreferences } from '@/stores/CVStore';

import { CV } from '@/components/CV';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';

import styles from './CVDrawer.module.scss';


type Props = OverlayComponentProps & {
  cv: CVInfo;
  preferences: CVPreferences;
};

export const CVDrawer = ({
  cv, preferences, state, onClose
}: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.drawer}
      data-opened={state === 'opened'}
    >
      <div
        className={styles.content}
      >
        <header className={styles.header}>
          <div className={styles.actions}>
            <Button
              isIconOnly
              variant="tertiary"
              className={styles.backBtn}
              onClick={onClose}
            >
              <MdArrowBack />
            </Button>
            <Button
              onClick={window.print}
            >
              {t('button.print')}
            </Button>
          </div>
          <div className={styles.tips}>
            <Typography
              className={styles.tipsTitle}
              weight="bolder"
            >
              {t('cv.tips')}
            </Typography>
            <div className={styles.tipsList}>
              <Typography color="secondary" className={styles.tipsItem}>{t('cv.tips.tip1')}</Typography>
              <Typography color="secondary" className={styles.tipsItem}>{t('cv.tips.tip2')}</Typography>
              <Typography color="secondary" className={styles.tipsItem}>{t('cv.tips.tip3')}</Typography>
            </div>
          </div>
        </header>
        <div className={styles.cv}>
          <CV
            cv={cv}
            variant="default"
            preferences={preferences}
          />
        </div>
      </div>
    </div>
  );
}