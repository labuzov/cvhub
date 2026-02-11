import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Spinner.module.css';


type Props = HTMLAttributes<HTMLDivElement> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  contain?: boolean;
  fullWidth?: boolean;
}

export const Spinner: React.FC<Props> = ({ className, size = 'md', contain, fullWidth, ...props }) => {
  const classes = classNames(
    styles.spinner,
    styles[size || 'md'],
    contain && styles.contain,
    fullWidth && styles.fullWidth,
    className
  );

  return (
    <div className={classes} {...props}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50" />
      </svg>
    </div>
  );
}
