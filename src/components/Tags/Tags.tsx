import { useCallback, type HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Tags.module.scss';
import { MdClose } from 'react-icons/md';


export type Tag = {
  id: string;
  title: string;
}

type Props = HTMLAttributes<HTMLDivElement> & {
  tags: Tag[];
  onRemove?: (id: string) => void;
}

export const Tags = ({
  tags, className, onRemove, ...props
}: Props) => {

  const renderTags = useCallback(() => (
    tags.map(tag => (
      <div
        key={tag.id}
        className={styles.tag}
      >
        {tag.title}
        {!!onRemove && (
          <div
            className={styles.removeBtn}
            onClick={() => onRemove(tag.id)}
          >
            <MdClose />
          </div>
        )}
      </div>
    ))
  ), [tags]);

  return (
    <div
      className={classNames(styles.wrapper, className)}
      {...props}
    >
      {renderTags()}
    </div>
  );
}
