import React from "react";
import { Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <>
            <Main style={{
                width:'100%',
                height:'700px',
                padding:'30px 20px',
                display:'flex',
                backgroundColor:'Black',
                backgroundSize: 'cover',
                opacity:'.9'
                }}
            >
                <Outlet/>
            </Main>
        </>
    )
}

export default Layout;