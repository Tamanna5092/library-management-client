import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './route/Route.jsx'
import { 
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
