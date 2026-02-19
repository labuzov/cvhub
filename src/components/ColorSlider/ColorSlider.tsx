import { ColorSlider as AriaColorSlider, ColorThumb, SliderTrack, type ColorSliderProps } from 'react-aria-components';
import classNames from 'classnames';

import styles from './ColorSlider.module.scss';


type Props = ColorSliderProps;

export const ColorSlider = ({ className, ...props }: Props) => {

  return (
    <AriaColorSlider
      className={classNames(styles.area, className)}
      {...props}
    >
      <SliderTrack
        className={styles.track}
        style={({ defaultStyle }) => ({
          background: `${defaultStyle.background},
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb className={styles.thumb} />
      </SliderTrack>
    </AriaColorSlider>
  );
}
