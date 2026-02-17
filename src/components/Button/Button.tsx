import { Button as AriaButton, type ButtonProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './Button.module.scss';


type Props = ButtonProps & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
};

export const Button = ({ variant = 'primary', className, children, ...props }: Props) => {

  return (
    <AriaButton
      className={classNames(
        styles.button,
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </AriaButton>
  );
}
