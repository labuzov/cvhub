import type { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { RiResetLeftFill } from 'react-icons/ri';

import { cvPreferencesColors, type CVPreferences } from '@/stores/CVStore';

import styles from './CVPreferences.module.scss';
import { Typography } from '../Typography';
import { ColorPicker, type Color } from '../ColorPicker';
import { Button } from '../Button';


type Props = HTMLAttributes<HTMLDivElement> & {
  preferences: CVPreferences;
  onPreferenceChange: (field: keyof CVPreferences, value: unknown) => void;
  onReset: () => void;
};

export const Preferences = ({ preferences, className, onPreferenceChange, onReset, ...props }: Props) => {
  const { t } = useTranslation();

  const handleColorChange = (field: keyof CVPreferences, value: Color) => {
    onPreferenceChange(field, value.toString('hex'));
  }

  return (
    <div
      className={classNames(styles.preferences, className)}
      {...props}
    >
      <div className={styles.form}>
        <section className={styles.section}>
          <Typography className={styles.sectionTitle}>
            {t(`cv.preferences.colors`)}
          </Typography>
          <div className={styles.rows}>
            {cvPreferencesColors.map(color => (
              <div className={styles.row} key={color}>
                <Typography className={styles.label} ellipsis>
                  {t(`cv.preferences.${color}`)}
                </Typography>
                <ColorPicker
                  value={preferences[color] as string}
                  onChange={v => handleColorChange(color, v)}
                />
              </div>
            ))}
          </div>
        </section>
        <div className={styles.actions}>
          <Button
            variant="ghost"
            onClick={onReset}
          >
            <RiResetLeftFill />
            {t('button.reset')}
          </Button>
        </div>
      </div>
    </div>
  );
}
