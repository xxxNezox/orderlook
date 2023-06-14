import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import About from "./About";

function Content(props){
    return(
        <div>
            <Routes>
                <Route path="/about" element={<About/>} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default Content;