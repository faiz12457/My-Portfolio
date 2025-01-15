import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import AllProjects from './Components/Project/AllProjects'


function Router() {


    const router=createBrowserRouter([
        {
            index:true,
            path:"/",
            element:<App />

        },

        {
            path:"/allprojects",
            element:<AllProjects />
        }

    ])
  return (
    
    <RouterProvider router={router} />
    
  )
}

export default Router