import React, { Component, useState } from "react";
import clsx from "clsx";
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
                </div>
            </article>
        </>
    )
}

const HostVanPage = () => {
    const elementVans = vanInfo.map((van)=> <VansList imgSrc={van.imageUrl} name={van.name} price={van.price} key={van.id} />)

    return (
        <>
        <section className="bg-[#FFF7ED] p-4 ">
            <h2 className="text-4xl font-bold">Your listed Vans</h2>
            <article>
                {elementVans}
            </article>
        </section>
        </>
    )
}

export { HostVanPage }