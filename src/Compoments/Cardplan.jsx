import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import imgarcade from "./../assets/img/icon-arcade.svg"
import imgadvanced from "./../assets/img/icon-advanced.svg"
import imgpro from "./../assets/img/icon-pro.svg"

export default function Cardplan(props) {
    const ref = useRef()
    const [laref, setlaref] = useState(ref)
    const [checkedbox, setcheckedbox] = useState("")
    const [monthly, setmonthly] = useState("")
    const [year, setyear] = useState("text-[#C5C5C7]")
    useEffect(() => {
        console.log(laref.current.checked);
        if (laref.current.checked==true) {
            setmonthly("text-[#0D203C]")
            setyear("text-[#C5C5C7]")
        }else{
            setmonthly("text-[#C5C5C7]")
            setyear("text-[#0D203C]")
        }
    }, [checkedbox])
    

    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5'>
            <h1 className="text-start w-[400px] font-bold text-3xl">Select your plan</h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm">You have the option of monthly or yearly billing</p><br />
            <div className="w-[400px] h-[150px] mb-4 flex items-center justify-between">
                <div className="border-[2px] active:border-[#9C82BC] border-[#ADADAD] active:bg-[#ECECEC] w-[125px] rounded-xl h-[140px]">
                    <img className="ps-[10px] pt-[14px]" src={imgarcade} alt="" />
                    <h5 className="ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Arcade</h5>
                    <p className="ps-[10px] text-xs font-bold text-[#ADADAD]">$90/yr</p>
                </div>
                <div className="border-[2px] border-[#ADADAD] active:border-[#9C82BC] active:bg-[#ECECEC] w-[125px] rounded-xl h-[140px]">
                    <img className="ps-[10px] pt-[14px]" src={imgadvanced} alt="" />
                    <h5 className="ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Advanced</h5>
                    <p className="ps-[10px] text-xs font-bold text-[#ADADAD]">$120/yr</p>
                </div>
                <div className="border-[2px] border-[#ADADAD] active:border-[#9C82BC] active:bg-[#ECECEC] w-[125px] rounded-xl h-[140px]">
                    <img className="ps-[10px] pt-[14px]" src={imgpro} alt="" />
                    <h5 className="ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Pro</h5>
                    <p className="ps-[10px] text-xs font-bold text-[#ADADAD]">$150/yr</p>
                </div>
            </div>
            <div className="w-[400px] h-[50px] flex items-center justify-center bg-[#EDF3FD] gap-16">
                <h4 className={`font-bold ${monthly}`}>Monthly</h4>
                {/* #0D203C */}
                <input ref={ref} onChange={()=>{checkedbox=="bg-[#ECECEC]"?setcheckedbox(""):setcheckedbox("bg-[#ECECEC]")}} type="checkbox" className="toggle theme-controller " name="" id="" />
                <h4 className={`font-bold ${year}`}>Yearly</h4>
            </div>
        </div>
    )
}
