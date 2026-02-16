import { useCVStore } from '@/stores/CVStore';

import { CV } from '@/components/CV';

import styles from './CVPreview.module.scss';


type Props = {};

export const CVPreview = ({}: Props) => {
  const { cv } = useCVStore();

  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.cv}>
        <CV
          cv={cv}
          variant="default"
        />
      </div>
    </div>
  );
}
