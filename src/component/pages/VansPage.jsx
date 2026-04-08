import React, { Component, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import clsx from "clsx"
import { vanInfo } from "./VanInfo"

const Card = (props) => {
    const { imgLink, name, price, type, id } = props
    return (
        <Link to={`${id}`}>
            <section className={clsx("card", "flex flex-col gap-[10px] ")}>
                <figure className="w-[300px] max-[20rem]:w-[230px] h-[200px] ">
                    <img className={"h-[100%] w-[100%] "} src={imgLink} alt={name} />
                </figure>
                <article className="flex justify-between ">
                    <p className="text-green-600 font-bold">{name}</p>
                    <span><code className="font-bold">${price}</code> <br />/day</span>
                </article>
                <code className={clsx("px-4 py-2 rounded-md bg-black w-fit text-white ",`${type}`)}>{type}</code>
            </section>
        </Link>
    )
}

const VansPage = () => {
    const [vansdata, updateData] = useState(vanInfo)

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("type"))


    // React.useEffect(() => {
    //     fetch("/api/vans").then(res => res.json()).then(data => updateData(data.vans))
    // }, [0])

    let newElements = (searchParams.get("type") ? vansdata.filter(vans => searchParams.get("type") == vans.type) : vansdata )
    .map(vans =>
        <Card key={vans.id} imgLink={vans.imageUrl} name={vans.name} price={vans.price} type={vans.type} id={vans.id} />
    )

    return (
        <>
            <main className={clsx("vansPage", "flex flex-col flex-wrap gap-[20px] p-4 justify-center items-center")}>
                <h3 className="text-3xl font-bold"><span className="text-blue-400">Explore</span> our van options</h3>
                <section className="flex w-[100%] justify-center item-center gap-[10px] flex-wrap max-[20rem]:flex-col">
                    <div className={clsx("text-center h-fit px-[30px] py-[10px] bg-[#FFF7ED] cursor-pointer", `${searchParams.get("type") == "simple" ? "simple" : undefined }`)} onClick={() =>  setSearchParams({type : "simple"}) }>Simple</div>
                    <div className={clsx("text-center h-fit px-[30px] py-[10px] bg-[#FFF7ED] cursor-pointer", `${searchParams.get("type") == "rugged"? "rugged" : undefined }`)}  onClick={() =>  setSearchParams({type : "rugged"}) }>Rugged</div>
                    <div className={clsx("text-center h-fit px-[30px] py-[10px] bg-[#FFF7ED] cursor-pointer", `${searchParams.get("type") == "luxury"? "luxury" : undefined }`)}  onClick={() =>  setSearchParams({type : "luxury"}) }>Luxury</div>
                    {searchParams.get("type") ? <div className={clsx("text-center h-fit px-[30px] py-[10px] bg-[#FFF7ED] cursor-pointer", )}  onClick={() =>  setSearchParams({type : ""}) }>Clear</div> : undefined}
                </section>
                <section className={clsx("flex flex-wrap gap-[20px] p-4 justify-center items-center")}>
                    {newElements}
                </section>
            </main>
        </>
    )
}

export { VansPage }