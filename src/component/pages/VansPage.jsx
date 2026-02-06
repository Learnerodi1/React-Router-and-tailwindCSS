import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx"
import { vanInfo } from "./VanInfo"

const Card = (props) => {
    const { imgLink, name, price, type, id } = props
    return (
        <Link to={`/vans/${id}`}>
            <section className={clsx("card", "flex flex-col gap-[10px] ")}>
                <figure className="w-[300px] max-[20rem]:w-[230px] h-[200px] ">
                    <img className={"h-[100%] w-[100%] "} src={imgLink} alt={name} />
                </figure>
                <article className="flex justify-between ">
                    <p className="text-green-600 font-bold">{name}</p>
                    <span><code className="font-bold">${price}</code> <br />/day</span>
                </article>
                <code className={clsx("px-4 py-2 rounded-md bg-black w-fit text-white ")}>{type}</code>
            </section>
        </Link>
    )
}

const VansPage = () => {
    const [vansdata, updateData] = useState(vanInfo)

    // React.useEffect(() => {
    //     fetch("/api/vans").then(res => res.json()).then(data => updateData(data.vans))
    // }, [0])

    let newElements = vansdata.map(vans =>
        <Card key={vans.id} imgLink={vans.imageUrl} name={vans.name} price={vans.price} type={vans.type} id={vans.id} />
    )

    return (
        <>
            <main className={clsx("vansPage", "flex flex-wrap gap-[20px] p-4 justify-center items-center")}>
                <h3 className="text-3xl font-bold"><span className="text-blue-400">Explore</span> our van options</h3>
                <section className={clsx("flex flex-wrap gap-[20px] p-4 justify-center items-center")}>
                    {newElements}
                </section>
            </main>
        </>
    )
}

export { VansPage }