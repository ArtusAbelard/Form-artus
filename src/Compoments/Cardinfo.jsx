import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Cardinfo(props) {
    const [yourname, setyourname] = useState("")
    const [yourmail, setyourmail] = useState("")
    const [yournumber, setyournumber] = useState("")
    useEffect(() => {
        if (yourname.length&&yourmail.length&&yournumber.length>=1) {
            props.setinfook(true)
        } 
    }, [yourname,yourmail,yournumber])

    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5 max-[375px]:w-[200px]'>
            <h1 className="text-start w-[400px] font-bold text-3xl max-[375px]:w-[200px]">Personal info</h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm max-[375px]:w-[200px]">Please provide your name,email address, and phone number.</p><br />
            <p className="text-start w-[400px] text-xs font-bold max-[375px]:w-[200px]">Your name is : {yourname}</p>
            <input onChange={(e)=>{setyourname(e.target.value)}} className="max-[375px]:w-[200px] flex justify-center items-center ps-3 mt-3  w-[400px] border-[2px] h-[40px] rounded-xl text-sm" name="name" placeholder="Your Name" type="text" />
            <p className="mt-3 text-start w-[400px] text-xs font-bold max-[375px]:w-[200px]">Your mail is : {yourmail}</p>
            <input onChange={(e)=>{setyourmail(e.target.value)}} className="max-[375px]:w-[200px] mt-3 ps-3 w-[400px] border-[2px] h-[40px] rounded-xl text-sm" placeholder="Your Mail" name="email" type="email" />
            <p className="mt-3 text-start w-[400px] text-xs font-bold max-[375px]:w-[200px]">Your phone number is : {yournumber}</p>
            <input onChange={(e)=>{setyournumber(e.target.value)}} className="appearance-none max-[375px]:w-[200px] mt-3 ps-3 w-[400px] border-[2px] h-[40px] rounded-xl text-sm" placeholder="Your Phone" type="tel"  />
        </div>
        
    )
}
