import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element:"",
        children:[
            {
                path:"/menu",
                element:"",
            },
            {
                path:"/singlePageCity/:cityID",
                element:"",
            },
        ]
    },
])

export default router;