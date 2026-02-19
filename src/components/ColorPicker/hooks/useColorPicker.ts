import { useEffect, useState } from 'react';
import { parseColor } from 'react-aria-components';

import { useDebounce } from '@/hooks/useDebounce';
import type { Color } from '../types';

const DEBOUNCE = 200;

export const useColorPicker = (initialColor?: string | Color, onChange?: (value: Color) => void) => {
  const [color, setColor] = useState(initialColor);
  const debouncedColor = useDebounce(color, DEBOUNCE);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  useEffect(() => {
    if (!debouncedColor) return;

    const value = typeof debouncedColor === 'string' ? parseColor(debouncedColor) : debouncedColor;
    onChange?.(value);
  }, [debouncedColor]);
  
  return {
    color,
    setColor
  };
}