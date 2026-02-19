import { ColorPicker as AriaColorPicker, type ColorPickerProps } from 'react-aria-components';

import styles from './ColorPicker.module.scss';
import { Popover, PopoverTrigger, PopoverWrapper } from '../Popover';
import { ColorSwatch } from '../ColorSwatch';
import { ColorArea } from '../ColorArea';
import { ColorSlider } from '../ColorSlider';
import { useColorPicker } from './hooks/useColorPicker';
import { ColorField } from '../ColorField';


type Props = Omit<ColorPickerProps, 'children' | 'defaultValue'>;

export const ColorPicker = ({ value, onChange, ...props }: Props) => {
  const { color, setColor } = useColorPicker(value, onChange);

  return (
    <AriaColorPicker
      {...props}
      value={color}
      onChange={setColor}
    >
      <PopoverWrapper>
        <PopoverTrigger>
          <ColorSwatch className={styles.swatch} />
        </PopoverTrigger>

        <Popover className={styles.popover}>
          <ColorArea
            colorSpace="hsb"
            xChannel="saturation"
            yChannel="brightness"
          />
          <ColorSlider
            colorSpace="hsb"
            channel="hue"
          />
          <ColorField />
        </Popover>
      </PopoverWrapper>
    </AriaColorPicker>
  );
}
