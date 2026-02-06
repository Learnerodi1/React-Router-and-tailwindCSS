import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { HostNav } from "./hostnav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { vanInfo } from "../pages/VanInfo";

const VansList = (props) => {
    let { imgSrc, price, name } = props
    return (
        <>
            <article className="bg-white p-4 rounded-md m-4">
                <div className="flex align-center justify-between">
                    <code className="w-[50%] gap-[20px] flex ">
                        <figure className="w-[100px] h-[100px]">
                            <img className="w-[100%] h-[100%]" src={imgSrc} alt={name} />
                        </figure>
                        <p className="flex flex-col justify-center">
                            <span className="text-3xl font-bold">{name}</span>
                            <code>${price}/day</code>
                        </p>
                    </code>
                    <span className="self-center">Edit</span>
                </div>
            </article>
        </>
    )
}

const HostPage = () => {
    const elementVans = vanInfo.map((van)=> <VansList imgSrc={van.imageUrl} name={van.name} price={van.price} />)
    return (
        <>
            <main>
                <div className={clsx("dashBoard", "p-4 bg-[#FFEAD0] py-8 ")}>
                    <h2 className="font-bold text-4xl">Welcome !</h2>
                    <p className="flex justify-between my-5 font-[verdana] ">
                        <code>Income last 30days</code>
                        <span className="font-bold ">Details</span>
                    </p>
                    <p className="font-bold text-5xl"> $2,280</p>
                </div>
                <section className="bg-[#FFDDB2] px-4 py-10 ">
                    <p className="font-[verdana] flex justify-between ">
                        <span className="font-bold">Review score <FontAwesomeIcon icon={faStar} />5.0/5</span>
                        <span className="font-bold">Details</span>
                    </p>
                </section>
                <section className="px-4 py-8 bg-[#FFF7ED] ">
                    <div className="flex justify-between ">
                        <h3 className="font-bold text-4xl">Your Listed Vans</h3>
                        <span className="self-center">View all</span>
                    </div>
                    <article>
                        {elementVans}
                    </article>
                </section>
            </main>
        </>
    )
}

export { HostPage }
