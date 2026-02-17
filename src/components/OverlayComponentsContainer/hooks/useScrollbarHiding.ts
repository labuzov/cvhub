import { useEffect } from 'react';

export const useScrollbarHiding = (isHidden: boolean) => {

  useEffect(() => {
    if (isHidden) {
      blockScrolling();

      if (isScrollbarVisible()) {
        addScrollbarPadding(getScrollbarWidth());
      }
    } else {
      allowScrolling();
      removeScrollbarPadding();
    }
  }, [isHidden]);

  const isScrollbarVisible = () => {
    return document.body.scrollHeight > document.body.clientHeight;
  }

  const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const width = (outer.offsetWidth - inner.offsetWidth);

    outer.parentNode?.removeChild(outer);

    return width;
  }

  const blockScrolling = () => {
    document.body.style.overflow = 'hidden';
  }

  const allowScrolling = () => {
    document.body.style.overflow = '';
  }

  const addScrollbarPadding = (width: number) => {
    document.body.style.paddingRight = width + 'px';
  }

  const removeScrollbarPadding = () => {
    document.body.style.paddingRight = '';
  }
}