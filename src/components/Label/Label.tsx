import type { LabelHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Label.module.scss';


type Props = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, htmlFor, children, ...props }: Props) => {

  return (
    <label
      className={classNames(styles.label, className)}
      {...props}
    >
      {children}
    </label>
  );
}
