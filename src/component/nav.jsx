import React, { Component, useState } from "react";
import clsx from "clsx"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="bg-[#FFF7ED] p-4 flex justify-between items-center ">
                <h3 className="text-2xl font-bold ">#VANLIFE</h3>
                <nav className="pr-7"> 
                    <Link className='decoration-[none] text-red-400 hover:underline hover:font-bold' to={"/"} >Home</Link>
                    <Link className='"decoration-[none] text-purple-400 ml-4  hover:underline hover:font-bold' to={"/about"} >About</Link>
                    <Link className='"decoration-[none] text-green-400 ml-4  hover:underline hover:font-bold' to={"/vans"} >Vans</Link>
                </nav>
            </header>
        </>
    )
}

export { NavBar }