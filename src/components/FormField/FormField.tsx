import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './FormField.module.scss';


type Props = HTMLAttributes<HTMLDivElement>;

export const FormField = ({ className, children, ...props }: Props) => {

  return (
    <div
      className={classNames(styles.field, className)}
      {...props}
    >
      {children}
    </div>
  );
}
