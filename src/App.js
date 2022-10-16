import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Navbar from "./Navbar";
import Buy from "./Buy";
import About from "./About";
import Support from "./Support";
import User from "./User";
import Admin from "./Admin";
import Login from "./Login";
import SignUp from "./SignUp";
import { Routes ,Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Buy" element={<Buy/>} />
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Support" element={<Support/>}/>
            <Route path="/User" element={<User/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        </>
        );
};

export default App;

