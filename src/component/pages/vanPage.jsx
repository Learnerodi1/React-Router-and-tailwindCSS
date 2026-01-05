import React, { Component, useState } from "react"
import { useParams } from "react-router-dom"
import { vanInfo } from "./VanInfo"

const VanDescriptionPage = () => {
    const [vanData, updateData] = useState(vanInfo)
    const params = useParams()
    const [Info, updateInfo] = useState(() => vanInfo.filter(data => params.id == data.id))
    return (
        <>
            <main className="flex justify-center items-center p-[10px] ">
                <section className="flex justify-center items-center flex-wrap gap-[20px] pt-[40px]">
                    <figure className="w-[57%] max-[700px]:w-[100%]">
                        <img className="w-[100%] h-[500px]" src={Info[0].imageUrl} alt={Info[0].name} />
                    </figure>
                    <div className="w-[38%] flex flex-col gap-[20px] max-[700px]:w-[100%]">
                        <code className="py-2 px-8 rounded-md bg-black text-white w-fit">{Info[0].type}</code>
                        <article className="flex flex-col gap-[10px]">
                            <h4 className="font-bold text-green-600 text-3xl">{Info[0].name}</h4>
                            <span className="font-bold tex-2xl ">${Info[0].price}/day</span>
                            <p>{Info[0].description}</p>
                        </article>
                        <button className="bg-[#FF8C38] py-[10px] text-white font-bold rounded-md">Rent this van</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export { VanDescriptionPage }