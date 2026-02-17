import { Outlet } from 'react-router-dom';

import { OverlayComponentsContainer } from '@/components/OverlayComponentsContainer';

const RouterWrapper = () => {

  return (
    <>
      <OverlayComponentsContainer />
      <Outlet />
    </>
  );
}

export default RouterWrapper;
