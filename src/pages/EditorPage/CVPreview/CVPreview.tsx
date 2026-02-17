import { useTranslation } from 'react-i18next';
import { MdDownload, MdSettings } from 'react-icons/md';

import { useCVStore } from '@/stores/CVStore';
import { useOverlayComponentsStore } from '@/stores/OverlayComponentsStore';

import { CV } from '@/components/CV';
import { Button } from '@/components/Button';
import { CVDrawer } from '@/components/OverlayComponents/CVDrawer';

import styles from './CVPreview.module.scss';


export const CVPreview = () => {
  const showComponent = useOverlayComponentsStore(state => state.showComponent);
  const { cv, preferences } = useCVStore();

  const { t } = useTranslation();

  const handleExportClick = async () => {
    await showComponent(CVDrawer, { cv, preferences });
  }

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.actions}>
        <Button
          variant="tertiary"
        >
          <MdSettings />
          {t('button.preferences')}
        </Button>
        <Button
          onClick={handleExportClick}
        >
          <MdDownload />
          {t('button.goToExport')}
        </Button>
      </div>
      <div className={styles.cv}>
        <CV
          cv={cv}
          preferences={preferences}
          variant="default"
        />
      </div>
    </div>
  );
}
