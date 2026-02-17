import { create } from 'zustand';

import type {
  OverlayComponent,
  OverlayComponentPromise,
  OverlayComponentProps,
  OverlayComponentState
} from './types';


const CLOSING_DURATION = 300;

type State = {
  components: OverlayComponent[];
  promises: OverlayComponentPromise[];
  showComponent: <P, T>(component: React.FunctionComponent<P>, props?: Omit<P, 'state' | 'onClose'>) => Promise<T>;
  closeComponentById: (id: string, payload?: unknown) => void;
  closeLastComponent: (payload?: unknown) => void;
  setComponentState: (id: string, componentState: OverlayComponentState) => void;
}

const generateId = () => {
  return Math.random().toString(36).substring(2, 8);
};

export const useOverlayComponentsStore = create<State>((set, get) => ({
  components: [],
  promises: [],

  showComponent: async <P, T>(component: React.FunctionComponent<P>, props?: Omit<P, 'state' | 'onClose'>) => {
    const id = generateId();
    const overlayComponent: OverlayComponent = {
      id,
      component: component as React.FunctionComponent<unknown>,
      state: 'opening',
      props: props as unknown as OverlayComponentProps,
    };

    return new Promise<T>((resolve, reject) => {
      set(state => ({
        promises: [...state.promises, {
          componentId: id,
          resolve: resolve as (value: unknown) => void,
          reject: reject as (value: unknown) => void
        }],
        components: [...state.components, overlayComponent]
      }));

      setTimeout(() => {
        get().setComponentState(id, 'opened');
      }, 0);
    }).finally(() => {
      get().setComponentState(id, 'closing');

      setTimeout(() => {
        set(state => ({
          components: state.components.filter(i => i.id !== id)
        }));
      }, CLOSING_DURATION);
    });
  },

  closeComponentById: (id: string, payload?: unknown) => {
    set(state => {
      const promise = state.promises.find(i => i.componentId === id);
      promise?.resolve(payload);

      return {
        promises: state.promises.filter(i => i.componentId !== id)
      }
    });
  },

  closeLastComponent: (payload?: unknown) => {
    const { components, closeComponentById } = get();
    if (!components.length) return;

    const lastComponent = components[components.length - 1];
    closeComponentById(lastComponent.id, payload);
  },

  setComponentState: (id: string, componentState: OverlayComponentState) => {
    set(state => ({
      components: state.components.map(component => {
        if (component.id === id) {
          component.state = componentState;
        }
        return component;
      })
    }))
  }
}));
