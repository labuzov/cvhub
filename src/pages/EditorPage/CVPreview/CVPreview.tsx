import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdDownload, MdSettings } from 'react-icons/md';

import { useCVStore } from '@/stores/CVStore';
import { ROUTES } from '@/router/routes';

import { CV } from '@/components/CV';
import { Button } from '@/components/Button';
import { Popover, PopoverWrapper } from '@/components/Popover';
import { Preferences } from '@/components/CVPreferences';

import styles from './CVPreview.module.scss';


export const CVPreview = () => {
  const { cv, preferences, template, updatePreferences, resetTemplatePreferences } = useCVStore();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleExportClick = async () => {
    navigate(ROUTES.export.get());
  }

  return (
    <>
      <div
        className={styles.wrapper}
      >
        <div className={styles.actions}>
          <PopoverWrapper>
            <Button
              variant="tertiary"
            >
              <MdSettings />
              {t('button.preferences')}
            </Button>
            <Popover
            
            >
              <Preferences
                preferences={preferences}
                onPreferenceChange={updatePreferences}
                onReset={resetTemplatePreferences}
              />
            </Popover>
          </PopoverWrapper>
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
            template={template}
          />
        </div>
      </div>

      <div className={styles.mobile}>
        <Button
          isIconOnly
          className={styles.mobileExportBtn}
          onClick={handleExportClick}
        >
          <MdDownload />
        </Button>
      </div>
    </>
  );
}
