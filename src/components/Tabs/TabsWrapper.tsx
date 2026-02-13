import {
  Tabs as AriaTabs,
  TabList,
  type TabsProps,
} from 'react-aria-components';
import classNames from 'classnames';

import styles from './Tabs.module.scss';

type Props = TabsProps;

const TabsWrapper = ({ className, children, ...props }: Props) => {

  return (
    <AriaTabs
      className={classNames(styles.wrapper, className)}
      {...props}
    >
      <TabList className={styles.tabList}>
        {children}
      </TabList>
    </AriaTabs>
  )
}

export default TabsWrapper;
