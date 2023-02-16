
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
export default function RouteComponent() {
    return(  
        <BrowserRouter>
            <Routes>
                <Route  element={ <Login/> }  path="/"/>
                <Route  element={ <Home/> }  path="/home"/>
            </Routes>
       </BrowserRouter>
    )
 }
 