import React, { Component, useState } from "react"
import { useParams } from "react-router-dom"
import { vanInfo } from "./VanInfo"

const VanDescriptionPage = () => {
    const [vanData, updateData] = useState(vanInfo)
    const params = useParams()
    // const [Info, updateInfo] = useState(null)

    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`).then(res => res.json()).then(data => updateInfo(data.vans))
    // }, [params.id])

    const [Info, updateInfo] = useState(function() {
        const dataInfo = vanInfo.filter(data => {
            if (data.id == params.id) {
                return data
            }
        }
        )
        return dataInfo[0]
    })
    console.log(Info)

    return (
        <>
            {Info ? <main className="flex justify-center items-center p-[10px] ">
                <section className="flex justify-center items-center flex-wrap gap-[20px] pt-[40px]">
                    <figure className="w-[57%] max-[700px]:w-[100%]">
                        <img className="w-[100%] h-[500px]" src={Info.imageUrl} alt={Info.name} />
                    </figure>
                    <div className="w-[38%] flex flex-col gap-[20px] max-[700px]:w-[100%]">
                        <code className="py-2 px-8 rounded-md bg-black text-white w-fit">{Info.type}</code>
                        <article className="flex flex-col gap-[10px]">
                            <h4 className="font-bold text-green-600 text-3xl">{Info.name}</h4>
                            <span className="font-bold tex-2xl ">${Info.price}/day</span>
                            <p>{Info.description}</p>
                        </article>
                        <button className="bg-[#FF8C38] py-[10px] text-white font-bold rounded-md">Rent this van</button>
                    </div>
                </section>
            </main> : <p>Loading......</p>}
        </>
    )
}

export { VanDescriptionPage }