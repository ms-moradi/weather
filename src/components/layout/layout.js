import React from "react";
import { Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <>
            <main style={{
                width:'100%',
                height:'700px',
                padding:'30px 20px',
                display:'flex',
                backgroundColor:'blue',
                backgroundSize: 'cover',
                opacity:'.9'
                }}
            >
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;