import { Checkbox as AriaCheckbox, type CheckboxProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './Checkbox.module.scss';


type Props = CheckboxProps;

export const Checkbox = ({ className, children, ...props }: Props) => {

  return (
    <AriaCheckbox
      className={classNames(
        styles.checkbox,
        className
      )}
      {...props}
    >
      {({ isIndeterminate }) => (
        <>
          <div className={styles.indicator}>
            <svg viewBox="0 0 18 18" aria-hidden="true" key={isIndeterminate ? 'indeterminate' : 'check'}>
              {isIndeterminate
                ? <rect x={1} y={7.5} width={16} height={3} />
                : <polyline points="2 9 7 14 16 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
}
