import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';


type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {

  return (
    <input
      className={classNames(styles.input, className)}
      {...props}
    />
  );
}
