import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const HostNav = () => {
    const styles ={
        textDecoration : "underline",
        fontWeight : "bold"
    }
    return (
        <>
            <nav className="flex bg-[#FFF7ED] p-4 gap-[10px] font-bond ">
                <NavLink to={"."} end  className="" style={({isActive})=> isActive ? styles : null}> Dashboard</NavLink>
                <NavLink to={"income"} className="" style={({isActive})=> isActive ? styles : null} > Income</NavLink>
                <NavLink to={"vans"} className="" style={({isActive})=> isActive ? styles : null} > Vans</NavLink>
                <NavLink to={"review"} className="" style={({isActive})=> isActive ? styles : null} > Reviews</NavLink>
            </nav>
        </>
    )
}
export { HostNav }