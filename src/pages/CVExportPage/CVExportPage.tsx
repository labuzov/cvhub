import { useTranslation } from 'react-i18next';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useCVStore } from '@/stores/CVStore';

import { CV } from '@/components/CV';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';

import styles from './CVExportPage.module.scss';
import { useCVPrint } from './hooks/useCVPrint';


const CVExportPage = () => {
  const { cv, preferences, template } = useCVStore();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { handlePrint } = useCVPrint(cv.name);

  return (
    <main
      className={styles.main}
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
              onClick={() => navigate(-1)}
            >
              <MdArrowBack />
            </Button>
            <Button
              onClick={handlePrint}
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
            template={template}
            preferences={preferences}
          />
        </div>
      </div>
    </main>
  );
}

export default CVExportPage;