import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Router} from "react-router-dom";

// Página de Conteúdo
import CadastrarFruta from "./routes/CadastrarFruta";


const router = createBrowserRouter ([
  {
    element: <App/>, // container da aplicação
    children: [ // rotas
      {
        path: "/fruta", 
        element: <CadastrarFruta/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

