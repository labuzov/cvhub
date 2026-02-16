import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';


type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  weight?: 'normal' | 'bolder' | 'bold';
  color?: 'primary' | 'secondary';
}

export const Typography = ({
  className, variant = 'body1', weight='normal', color = 'primary', children, ...props
}: Props) => {

  return (
    <div
      className={classNames(
        styles.typography,
        styles[variant],
        styles[weight],
        styles[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
