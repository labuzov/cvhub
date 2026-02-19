import { ColorSwatch as AriaColorSwatch, type ColorSwatchProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './ColorSwatch.module.scss';


type Props = ColorSwatchProps;

export const ColorSwatch = ({ className, ...props }: Props) => {

  return (
    <AriaColorSwatch
      className={classNames(styles.swatch, className)}
      {...props}
      style={({ color }) => ({
        background: `linear-gradient(${color}, ${color}),
        repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      })}
    />
  );
}
