import React,{Component, useState} from "react";
import clsx from "clsx";

const Footer= () =>{
    const [date, setdate] = useState(()=>{
        const newdate = new Date()
        let year = newdate.getFullYear()
        return year
    })
    return(
        <>
        <footer className="bg-black text-white text-bold text-center p-4">
            &copy; Learner @{date}.....new day new tech
        </footer>
        </>
    )
}

export{Footer}