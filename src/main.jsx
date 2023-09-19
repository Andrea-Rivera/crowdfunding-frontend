import React from 'react'
import ReactDOM from 'react-dom/client'
import{ createBrowserRouter, RouterProvider }from"react-router-dom";

//import Pages
import HomePage from './assets/pages/HomePage';
import ProjectPage from './assets/pages/ProjectPage';
import LoginPage from './assets/pages/Loginpage';
import CreateProject from './assets/components/ProjectForm/CreateProjectForm';

//import Components
import NavBar from './assets/components/Navbar/NavBar';
import { AuthProvider } from './assets/components/AuthProvider';

const router =createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      {path:"/",element:<HomePage />},
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/projects/", element: <CreateProject /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
