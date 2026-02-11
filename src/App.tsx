import { RouterProvider } from 'react-router-dom';

import { useAppInit } from '@/hooks/useAppInit';
import { router } from '@/router/router';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Spinner } from '@/components/Spinner';

const App = () => {
  const { isAppInit } = useAppInit();

  return (
    <ErrorBoundary>
      {isAppInit ? (
        <RouterProvider router={router} />
      ) : (
        <Spinner contain size="xl" />
      )}
    </ErrorBoundary>
  )
}

export default App;
