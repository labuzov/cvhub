import {
  Tab as AriaTab,
  SelectionIndicator,
  composeRenderProps,
  type TabProps,
} from 'react-aria-components';
import classNames from 'classnames';

import styles from './Tabs.module.scss';

type Props = TabProps;

const Tab = ({ className, ...props }: Props) => {

  return (
    <AriaTab
      className={classNames(styles.tab, className)}
      {...props}
    >
      {composeRenderProps(props.children, children => (<>
        {children}
        <SelectionIndicator className={styles.indicator} />
      </>))}
    </AriaTab>
  )
}

export default Tab;
