import {Routes,Route} from "react-router-dom";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Trips from "../Trips";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<h1>List Your Property</h1>}/>
        <Route path="/support" element={<h1>Support</h1>}/>
        <Route path="/trips" element={<Trips/>} />
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
}

export default AllRoutes;
