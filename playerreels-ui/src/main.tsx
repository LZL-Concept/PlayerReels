import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import LoginPage from './loginPage/Login.tsx';
import NotFound from './NotFoundPage.tsx';
import RegisterPage from './registerPage/RegisterPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/Login',
    element: <LoginPage />
  },
  {
    path: '/Register',
    element: <RegisterPage />
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
