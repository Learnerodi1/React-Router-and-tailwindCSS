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
                <NavLink to={"/host"} end  className="" style={({isActive})=> isActive ? styles : null}> Dashboard</NavLink>
                <NavLink to={"/host/income"} className="" style={({isActive})=> isActive ? styles : null} > Income</NavLink>
                <NavLink to={"/host/vans"} className="" style={({isActive})=> isActive ? styles : null} > Vans</NavLink>
                <NavLink to={"/host/review"} className="" style={({isActive})=> isActive ? styles : null} > Reviews</NavLink>
            </nav>
        </>
    )
}
export { HostNav }