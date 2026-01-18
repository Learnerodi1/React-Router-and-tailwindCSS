import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const HostNav = () => {
    return (
        <>
            <nav className="flex bg-[#FFF7ED] p-4 gap-[10px] font-bond ">
                <Link to={"/host"} className=""> Dashboard</Link>
                <Link to={"/host/income"} className=""> Income</Link>
                <Link to={"/host/vans"} className=""> Vans</Link>
                <Link to={"/host/reviews"} className=""> Reviews</Link>
            </nav>
        </>
    )
}
export { HostNav }