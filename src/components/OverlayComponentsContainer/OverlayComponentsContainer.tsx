import { createElement } from 'react';
import { createPortal } from 'react-dom';

import type { OverlayComponentProps } from '@/stores/OverlayComponentsStore/types';

import { useOverlayComponentsContainer } from './hooks/useOverlayComponentsContainer';


export const OverlayComponentsContainer: React.FC = () => {
  const { components, closeComponentById } = useOverlayComponentsContainer();

  const getZIndex = (index: number) => 100 + index * 10;

  return (
    <>
      {components.map((component, index) => {
        const props = component.props as React.Attributes & OverlayComponentProps ?? {};

        props.state = component.state;
        props.onClose = (payload: unknown) => closeComponentById(component.id, payload);

        const element = createElement(component.component, props);

        return createPortal((
          <div
            key={component.id}
            style={{ zIndex: getZIndex(index), position: 'fixed' }}
          >
            {element}
          </div>
        ), document.body)
      })}
    </>
  );
}
