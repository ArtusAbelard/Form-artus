import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Cardinfo(props) {
    const [yourname, setyourname] = useState("")
    const [yourmail, setyourmail] = useState("")
    const [yournumber, setyournumber] = useState("")
    

    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5'>
            <h1 className="text-start w-[400px] font-bold text-3xl">Personal info</h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm">Please provide your name,email address, and phone number.</p><br />
            <p className="text-start w-[400px] text-xs font-bold">Your name is : {yourname}</p>
            <input onChange={(e)=>{setyourname(e.target.value)}} className="flex justify-center items-center ps-3 mt-3  w-[400px] border-[2px] h-[40px] rounded-xl text-sm" placeholder="Your Name" type="text" />
            <p className="mt-3 text-start w-[400px] text-xs font-bold">Your mail is : {yourmail}</p>
            <input onChange={(e)=>{setyourmail(e.target.value)}} className="mt-3 ps-3 w-[400px] border-[2px] h-[40px] rounded-xl text-sm" placeholder="Your Mail" type="text" />
            <p className="mt-3 text-start w-[400px] text-xs font-bold">Your phone number is : {yournumber}</p>
            <input onChange={(e)=>{setyournumber(e.target.value)}} className="mt-3 ps-3 w-[400px] border-[2px] h-[40px] rounded-xl text-sm" placeholder="Your Phone" type="text" />

        </div>
    )
}
