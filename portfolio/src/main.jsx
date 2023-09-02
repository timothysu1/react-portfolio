import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'
import Error from './pages/Error'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error/>, 
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/portfolio',
        element:<Portfolio/>,
      },
      {
        path:'/resume',
        element:<Resume/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
