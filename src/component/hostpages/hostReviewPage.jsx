import React, { Component, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Rating = (props) => {
    let { percent, star } = props
    return (
        <>
            <div className="flex justify-between items-center my-3">
                <p>{star} stars</p>
                <p className="bg-[#B9B9B9] h-[7px] rounded-md  w-[70%] "><code className={`block bg-[orange] h-[7px] rounded-md`} style={{ width: `${percent}%` }}></code></p>
                <span>{percent}%</span>
            </div>
        </>
    )
}
const CommentTab = (props) => {
    const { starNum, name, date, message } = props
    const [numOfStar, updateSatrNum] = useState(() => {
        let arr = []
        for (let i = 0; i < starNum; i++) {
            arr.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        return arr
    })

    return (
        <>
            <section className="">
                <div>
                    { numOfStar}
                </div>
                <p className="py-4 text-gray-600"><span className="font-bold text-black ">{name}</span> {date} </p>
                <p className="font-[verdana]">{message}</p>
                <p className="h-[2px] bg-[#B9B9B9] w-[100%] mt-10 "></p>
            </section>
        </>
    )
}

const HostReviewPage = () => {
    const [comment, updateComment] = useState([
        { id: 1, starNum: 5, name: "Learner", date: "November 15, 2026", message: "Love this product. It was the best I have ever seen un my life and I am going to recommend to anyone I know." },
        { id: 2, starNum: 3, name: "Shortman", date: "July 17, 2028", message: "Love this product. It was the best I have ever seen un my life and I am going to recommend to anyone I know." }
    ])
    let elementMsg = comment.map((msg) => <CommentTab name={msg.name} key={msg.id} date={msg.date} message={msg.message} starNum={msg.starNum} />)
    return (
        <>
            <main className="bg-[#FFF7ED] p-4">
                <h2 className="text-3xl font-bold mb-6 ">
                    Your reviews
                    <span className="text-[1rem] ml-4 font-normal">
                        last <code className="underline font-bold "> 30days</code>
                    </span>
                </h2>
                <p className="mb-6 text-[2.5rem] flex gap-[10px] font-bold ">
                    5.0  <span className="text-[1rem] self-center font-normal "><code className="bg-[yellow] "><FontAwesomeIcon icon={faStar} /></code> overall rating</span>
                </p>
                <section >
                    <Rating percent={100} star={5} />
                    <Rating percent={70} star={4} />
                    <Rating percent={40} star={3} />
                    <Rating percent={20} star={2} />
                    <Rating percent={10} star={1} />
                </section>

                <section className="flex flex-col gap-[30px] mt-8 ">
                    <h4 className="font-bold text-2xl">Review{`(${comment.length})`}</h4>
                    {elementMsg}
                </section>
            </main>
        </>
    )
}

export { HostReviewPage }