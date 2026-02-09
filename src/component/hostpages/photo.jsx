import React, { Component, useState } from "react";
import clsx from "clsx";
import { useOutletContext } from "react-router-dom";

const Photo = () => {
    const {van} = useOutletContext()
    return (
        <>
            <figure className="w-[150px] h-[150px]">
                <img className="w-[100%] h-[100%]" src={van.imageUrl} alt={van.name} />
            </figure>
        </>
    )
}

export {Photo}