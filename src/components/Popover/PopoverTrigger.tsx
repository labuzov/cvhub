import type { PropsWithChildren } from 'react';
import { Pressable } from 'react-aria-components';


type Props = PropsWithChildren;

export const PopoverTrigger = ({ children }: Props) => {

  return (
    <Pressable>
      <div role="button">
        {children}
      </div>
    </Pressable>
  );
}
