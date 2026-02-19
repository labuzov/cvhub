import { ColorField as AriaColorField, Input, type ColorFieldProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './ColorField.module.scss';


type Props = ColorFieldProps;

export const ColorField = ({ className, ...props }: Props) => {

  return (
    <AriaColorField
      className={classNames(styles.field, className)}
      {...props}
    >
      <Input className={styles.input} />
    </AriaColorField>
  );
}
