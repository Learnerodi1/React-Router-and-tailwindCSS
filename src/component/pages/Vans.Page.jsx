import React, { Component, useState } from "react";
import clsx from "clsx"

const Card = (props) => {
    const { imgLink, name, price, type } = props
    return (
        <section className={clsx("card")}>
            <figure>
                <img src={imgLink} alt={name} />
            </figure>
            <article>
                <p>{name}</p>
                <span>{price} <br />/day</span>
            </article>
            <code>{type}</code>
        </section>
    )
}

const VansPage = () => {
    const [vansdata, updateData] = useState([])

    React.useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => updateData(data.vans))
    }, [0])

    let newElements = vansdata.map(vans =>
        <Card key={vans.id} imgLink={vans.imageUrl} name={vans.name} price={vans.price} type={vans.type} />
    )

    return (
        <>
            <main className="vansPage">
                {newElements}
            </main>
        </>
    )
}

export { VansPage }