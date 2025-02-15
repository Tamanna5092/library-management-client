import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './route/Route.jsx'
import { 
  RouterProvider,
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </StrictMode>,
)
