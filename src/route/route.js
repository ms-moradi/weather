import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Menu from "../pages/menu/menu";
import SinglePageCity from "../pages/singlePageCity/singlePageCity";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:"/menu",
                element: <Menu/>,
            },
            {
                path:"/singlePageCity/:cityID",
                element: <SinglePageCity/>,
            },
        ]
    },
])

export default router;