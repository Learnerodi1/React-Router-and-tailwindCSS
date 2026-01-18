import React, { Component, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";
import { HostNav } from "./hostnav";

const HostLayout = () => {
    return (
        <>
        <HostNav/>
        <Outlet/>
        </>
    )
}

export {HostLayout}