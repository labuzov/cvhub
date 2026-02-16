import { Outlet } from 'react-router';

import { Header } from '@/components/Header';

import styles from './AppLayout.module.scss';

const AppLayout = () => {

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout;
