import React, { Component, useState } from "react";
import clsx from "clsx";

const TransactionHistory = (props) => {
    let { amount, date } = props
    return (
        <>
            <div className="flex justify-between bg-[white] p-4 ">
                <span className="font-bold text-2xl">${amount}</span>
                <code>{date}</code>
            </div>
        </>
    )
}

const HostIncomePage = () => {
    const [transaction, updateTransaction] = useState([
        { id: 1, amount: 300, date: "5/5/26" },
        { id: 2, amount: 1000, date: "18/8/27" },
        { id: 3, amount: 200, date: "15/6/25" },
        { id: 4, amount: 800, date: "24/3/26" },
        { id: 5, amount: 500, date: "25/12/28" }
    ])
    let elementTransac = transaction.map((transac) => <TransactionHistory key ={transac.id} amount ={transac.amount} date= {transac.date} />)
    return (
        <>
            <main className="p-4 bg-[#FFF7ED] ">
                <h3 className="font-bold text-3xl">Income</h3>
                <p className="py-6">Last <span className="underline font-bold">30 days</span></p>
                <p className="font-bold text-5xl"> $2,280</p>
                <section className="mt-6">
                    <h4 className="flex justify-between ">
                        <span className="font-bold text-2xl">Your transactions{`(${transaction.length})`}</span>
                        <aside className="self-end" > last <code className="underline font-bold">30days</code></aside>
                    </h4>
                    <article className="flex flex-col gap-[20px] py-6 ">
                        {elementTransac}
                    </article>
                </section>
            </main>
        </>
    )
}
export { HostIncomePage }