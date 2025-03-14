import LogInPage from './../pages/auth/login'
import { Navigate, RouteObject } from 'react-router'
import { MainLayout } from '../layout/mainLayout'
import { AuthLayout } from '../layout/authLayout'
import DashboardPage from '../pages/dashboard'
 

const allRoutes = (isAuthenticated) => {
  const routes = []
  
  routes.push({
    path: '/',
    element: <MainLayout />,
    
    children: [
        { index: true, element: <Navigate to="/login" /> },
      {
        element: <AuthLayout />,
        
        
        children: [
          {
            path: 'login',
            element: isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LogInPage />
            ),
          },

          {
            path: 'dashboard',
            element: isAuthenticated ? (
              <DashboardPage/>
            ) : (
              <LogInPage />
            ),
          },
        ],
      },   
    ],
  })

  return routes
}

export default allRoutes
