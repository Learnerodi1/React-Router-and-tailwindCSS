import React, { Component, useState } from "react";
import BgImg from "../assets/images/bgImg.png"
import clsx from "clsx"

const Home = () => {
    return (
        <>
            <main className={clsx("Home p-[30px]  h-[70vh] flex justify-center items-center" )}
                style={{ background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BgImg}) `, backgroundPosition:"center" }}
            >
                <section className="flex flex-col gap-[40px] justify-center items-center">
                    <h1 className="text-3xl text-white">You got the travel plans, we got the travel vans.</h1>
                    <p className="text-gray-200">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button className="bg-[#FF8C38] px-[60px] cursor-pointer text-white py-[10px] text-center" type="button">Find your van</button>
                </section>
            </main>
        </>
    )
}

export { Home }