import React, { Component, useState } from "react";
import clsx from "clsx";
import { useOutletContext } from "react-router-dom";

const Details = () => {
    const {van} = useOutletContext()
    // console.log(van)
    return (
        <>
            <article className="flex flex-col gap-[20px] ">
                <p className="font-bold">Name : <span className="font-normal">{van.name}</span></p>
                <p className="font-bold">Descriotion : <span className="font-normal">{van.description}</span></p>
                <p className="font-bold">Category : <span className="font-normal">{van.type}</span></p>
                <p className="font-bold">Visibility : <span className="font-normal">public</span></p>
            </article>
        </>
    )
}

export {Details}