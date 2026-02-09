import React, { Component, useState } from "react";
import clsx from "clsx";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
    const {van} = useOutletContext()
    return (
        <>
            <p className="text-3xl font-bold py-5">${`${van.price}.00/ day`}</p>
        </>
    )
}

export {Pricing}