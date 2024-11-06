import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import NotFound from './pages/not-found/NotFoundPage.tsx';
import LoginPage from './pages/login/Login.tsx';
import RegisterPage from './pages/register/RegisterPage.tsx';


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
    path: '/Login/Register',
    element: <RegisterPage />
  },
  {
    path: '/Login/ForgotPassword?',
    element: <RegisterPage />
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
