import { useCallback, useEffect, useRef } from 'react';

/**
 * Synchronizes a stack of UI components with the browser URL
 * by storing their length inside a query-parameter (`overlays`).
 *
 * When components are added, the hook updates the URL and pushes a new
 * history entry. When components are removed, it rewrites or clears the
 * parameter accordingly. Browser Back/Forward navigation is also handled:
 * a popstate event triggers `closeLastComponent`, ensuring the UI stack
 * stays consistent with the URL history.
 *
 * @param componentsLength - Current number of active stacked components.
 * @param closeLastComponent - Callback that closes the most recently opened component.
*/
export const useHistorySync = (componentsLength: number, closeLastComponent: () => void) => {
  const prevLength = useRef(componentsLength);

  const handlePopState = useCallback(() => {
    closeLastComponent();
  }, [closeLastComponent]);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handlePopState]);

  useEffect(() => {
    const current = componentsLength;
    const previous = prevLength.current;

    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (current > previous) { 
      params.set('overlays', componentsLength.toString());
      window.history.pushState({ overlays: true }, '', url.toString());
    }
    
    if (current < previous) { 
      if (current > 0) { 
        params.set('overlays', componentsLength.toString());
        window.history.pushState({ overlays: true }, '', url.toString()); 
      } else { 
        params.delete('overlays')
        window.history.pushState({}, '', url.toString()); 
      }
    }
    
    prevLength.current = current; 
  }, [componentsLength]);
  
  // useEffect(() => {
  //   const current = componentsLength;
  //   const previous = prevLength.current;
    
  //   if (current > previous) {
  //     window.history.pushState({ modal: true }, '');
  //   } 
    
  //   if (current < previous) {
  //     window.history.back();
  //   }
    
  //   prevLength.current = current;
  // }, [componentsLength]);
}