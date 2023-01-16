import React, { Children } from "react";
import {createRoot} from "react-dom/client";
import Header from "./Components/Header";
import "./style.css";
import Footer from "./Components/Footer";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Main from "./Components/Main";
import Mission from "./Components/Mission";
import Menu from "./Components/Menu";


/*
  React element is normal js variable which contains valid JSX expersion
*/

const appheader= (
                  <div className="appTitle">
                       Wake n Bake
                  </div>
                )
/*

/*
  Functional Component is JS funciton which return valid JSX
*/
const App = () => 
     (      
        <div>
              <Header></Header>

              <div id="MainAppDiv">
                  <Outlet />
              </div>
              
              <Footer></Footer>
              
        </div>
)


/*
 Router configuration
*/
const RouteConfig = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
            errorElement: <ErrorPage />,
            children:[

                {
                    path:"/",
                    element: <Main />

                },
                {
                    path:"/about",
                    element: <About />
                },
                {
                    path:"/contact",
                    element: <Contacts />
                },
                {
                    path:"/mission",
                    element: <Mission />
                },
                {
                    path:"/restaurent/:id",
                    element: <Menu />
                }
            ]
        }
    ]
);



    const rootDom= document.getElementById("root");

    const root= createRoot(rootDom);

    root.render(<RouterProvider router={RouteConfig} />)

