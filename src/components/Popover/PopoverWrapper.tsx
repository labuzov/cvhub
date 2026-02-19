import { DialogTrigger, type DialogTriggerProps } from 'react-aria-components';

type Props = DialogTriggerProps;

export const PopoverWrapper = ({ children, ...props }: Props) => {

  return (
    <DialogTrigger {...props}>
      {children}
    </DialogTrigger>
  );
}
