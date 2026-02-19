import { ColorArea as AriaColorArea, ColorThumb, type ColorAreaProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './ColorArea.module.scss';


type Props = ColorAreaProps;

export const ColorArea = ({ className, ...props }: Props) => {

  return (
    <AriaColorArea
      className={classNames(styles.area, className)}
      {...props}
    >
      <ColorThumb className={styles.thumb} />
    </AriaColorArea>
  );
}
