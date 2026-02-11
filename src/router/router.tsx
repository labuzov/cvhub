import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/components/AppLayout/AppLayout';

import RouterWrapper from './RouterWrapper';
// import { ROUTES } from './routes';

const EditorPage = lazy(() => import('@/pages/EditorPage/EditorPage'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterWrapper />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <EditorPage /> },
          // { path: ROUTES.editor.path, element: <EditorPage /> },
          // { path: "*", element: <NotFound /> },
        ]},
    ],
  },
]);