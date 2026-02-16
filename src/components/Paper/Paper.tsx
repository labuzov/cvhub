import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Paper.module.scss';


type Props = HTMLAttributes<HTMLDivElement>;

export const Paper = ({ className, children, ...props }: Props) => {

  return (
    <div
      className={classNames(styles.paper, className)}
      {...props}
    >
      {children}
    </div>
  );
}
