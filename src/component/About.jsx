import React, { Component, useState } from "react";
import clsx from "clsx"
import Aboutbg from "../assets/images/Aboutbg.png"
const About = () => {
    return (
        <>
            <main className="About">
                <section>
                    <img className="h-[300px] w-[100%]" src={Aboutbg} alt="About Bg" />
                </section>
                <article className="p-8 flex flex-col gap-[10px] "> 
                    <section className="flex flex-col gap-[30px] ">
                        <h2 className="font-bold text-3xl ">Squeeze in a sedan when you could relax in a van.</h2>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </section>
                    <section className="bg-[#FFCC8D] flex flex-col gap-[30px] p-4 rounded-md">
                        <p>Your destination is waiting.Your van is ready.<br />Your van is ready.</p>
                        <button className={clsx("bg-black text-white p-4 w-fit rounded-md")}>Explore our vans</button>
                    </section>
                </article>
            </main>
        </>
    )
}

export { About }