import React, { Component, useState } from "react";
import clsx from "clsx"
import { NavLink, Outlet, useParams } from "react-router-dom";
import { vanInfo } from "../pages/VanInfo";


const Vans = () => {
    const param = useParams()
    const [van, updateVan] = useState(() => {
        const data = vanInfo.filter((vans) => {
            if (vans.id == param.id) {
                return vans
            }
        })
        return data[0]
    })
    const styles = {
        textDecoration: "underline",
        fontWeight: "bold"
    }

    return (
        <>
            <main className="p-4 bg-[#FFF7ED] flex flex-col gap-[20px]">
                <NavLink relative="path" to={".."} className="underline">Back to all vans</NavLink>
                <article className="p-6 bg-white">
                    <section className="flex justify-center items-center flex-wrap gap-[20px] ">
                        <figure className="w-[57%] max-[700px]:w-[100%]">
                            <img className="w-[100%] h-[500px]" src={van.imageUrl} alt={van.name} />
                        </figure>
                        <div className="w-[38%] flex flex-col gap-[20px] max-[700px]:w-[100%]">
                            <code className="py-2 px-8 rounded-md bg-black text-white w-fit">{van.type}</code>
                            <article className="flex flex-col gap-[10px]">
                                <h4 className="font-bold text-green-600 text-3xl">{van.name}</h4>
                                <span className="font-bold tex-2xl ">${van.price}/day</span>
                            </article>
                        </div>
                    </section>
                </article>
                <nav className="flex gap-[20px] ">
                    <NavLink to={"."} end style={({ isActive }) => isActive ? styles : null} >Details</NavLink>
                    <NavLink to={"pricing"} style={({ isActive }) => isActive ? styles : null} >Pricing</NavLink>
                    <NavLink to={"photo"} style={({ isActive }) => isActive ? styles : null} >Photo</NavLink>
                </nav>
                <Outlet context={{van}}/>
            </main>
        </>
    )
}

export { Vans }