import { Popover as AriaPopover, type PopoverProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './Popover.module.scss';

type Props = PopoverProps & {
  hideArrow?: boolean;
};

export const Popover = ({ hideArrow, children, className, ...props }: Props) => {

  return (
    <AriaPopover
      className={classNames(styles.popover, className)}
      {...props}
    >
      {children}
    </AriaPopover>
  );
}
