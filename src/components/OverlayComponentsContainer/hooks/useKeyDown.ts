import { useCallback, useEffect } from 'react';

import { KeyCodes } from '@/constants/keyboard';


export const useKeyDown = (componentsLength: number, closeLastComponent: () => void) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!componentsLength) return;
    
    if (event.code === KeyCodes.Escape) {
      closeLastComponent();
    }
  }, [componentsLength, closeLastComponent]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);
}