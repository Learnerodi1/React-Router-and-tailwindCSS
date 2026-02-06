import React, { Component, useState } from "react";
import clsx from "clsx"
import { NavLink,Outlet } from "react-router-dom";
import { Footer } from "./footer";

const NavBar = () => {
    const styles = {
        textDecoration : "underline",
        fontWeight : "bold"
    }
    return (
        <>
            <header className="bg-[#FFF7ED] p-4 flex justify-between items-center ">
                <h3 className="text-2xl font-bold ">#VANLIFE</h3>
                <nav className="pr-7">
                    <NavLink className={clsx('decoration-[none] text-red-400 hover:underline hover:font-bold')} style={({isActive})=> isActive ? styles : null} to={"/"} >Home</NavLink>
                    <NavLink className='"decoration-[none] text-purple-400 ml-4  hover:underline hover:font-bold' style={({isActive})=> isActive ? styles : null} to={"/about"} >About</NavLink>
                    <NavLink className='"decoration-[none] text-green-400 ml-4  hover:underline hover:font-bold' style={({isActive})=> isActive ? styles : null} to={"/vans"} >Vans</NavLink>
                    <NavLink className='"decoration-[none] text-yellow-400 ml-4  hover:underline hover:font-bold' style={({isActive})=> isActive ? styles : null}  to={"/host"} >Host</NavLink>
                </nav>
            </header>
            <Outlet/>
            <Footer/>
        </>
    )
}

export { NavBar }