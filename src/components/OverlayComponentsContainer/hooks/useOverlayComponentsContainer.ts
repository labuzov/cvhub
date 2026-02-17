import { useShallow } from 'zustand/shallow';

import { useOverlayComponentsStore } from '@/stores/OverlayComponentsStore';
import { useScrollbarHiding } from './useScrollbarHiding';
import { useHistorySync } from './useHistorySync';
import { useKeyDown } from './useKeyDown';


export const useOverlayComponentsContainer = () => {
  const {
    components,
    closeComponentById,
    closeLastComponent
  } = useOverlayComponentsStore(useShallow(({
    components,
    closeComponentById,
    closeLastComponent
  }) => ({
    components,
    closeComponentById,
    closeLastComponent
  })));

  useScrollbarHiding(Boolean(components.length));
  useHistorySync(components.length, closeLastComponent);
  useKeyDown(components.length, closeLastComponent);

  return {
    components,
    closeComponentById
  }
}