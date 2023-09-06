import React from 'react'
import ReactDOM from 'react-dom/client'
import{ createBrowserRouter, RouterProvider }from"react-router-dom";

//import Pages
import HomePage from './assets/pages/HomePage';
import ProjectPage from './assets/pages/ProjectPage';

//import Components
import NavBar from './assets/components/NavBar';

const router =createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      {path:"/",element:<HomePage />},
      {path:"/project",element:<ProjectPage />},    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
