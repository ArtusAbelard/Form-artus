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
    const [bggrey, setbggrey] = useState("bg-[#ECECEC]")
    const [bggrey1, setbggrey1] = useState("")
    const [bggrey2, setbggrey2] = useState("")
    const [arcadetxt, setarcadetxt] = useState("9/mo")
    const [advancedtxt, setadvancedtxt] = useState("12/mo")
    const [protxt, setprotxt] = useState("15/mo")
    
    useEffect(() => {
        console.log(laref.current.checked);
        if (laref.current.checked==true) {
            setmonthly("text-[#C5C5C7]")
            setyear("text-[#0D203C]")
            setarcadetxt("90/yr")
            setadvancedtxt("120/yr")
            setprotxt("150/yr")
            props.setmoory("Yearly")
        }else{
            setmonthly("text-[#0D203C]")
            setyear("text-[#C5C5C7]")
            setarcadetxt("9/mo")
            setadvancedtxt("12/mo")
            setprotxt("15/mo")
            props.setmoory("Monthly")
        }
    }, [checkedbox])
    

    return (
        <div className='max-[375px]:ms-[50px] max-[375px]:w-[200px] w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5 max-[375px]:pe-0'>
            <h1 className="text-start max-[375px]:w-[200px] w-[400px] font-bold text-3xl">Select your plan</h1>
            <p className="max-[375px]:w-[200px] text-start w-[400px] text-[#ADADAD] text-sm">You have the option of monthly or yearly billing</p><br />
            <div className="max-[375px]:w-[250px] max-[375px]:gap-[2px] w-[400px] h-[150px] mb-4 flex items-center justify-between">
                <div onClick={()=>{setbggrey("bg-[#ECECEC]"),setbggrey1(""),setbggrey2(""),props.setplanvalue("Arcade"),props.setchosed("Arcade"),props.settotal(9)}} className={`border-[2px] hover:border-[#9C82BC] border-[#ADADAD] active:bg-[#ECECEC] max-[375px]:w-[150px] w-[125px] rounded-xl h-[140px] ${bggrey}`}>
                    <img className=" ps-[10px] pt-[14px]" src={imgarcade} alt="" />
                    <h5 className=" ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Arcade</h5>
                    <p className=" ps-[10px] text-xs font-bold text-[#ADADAD]">${arcadetxt}</p>
                </div>
                <div onClick={()=>{setbggrey(""),setbggrey1("bg-[#ECECEC]"),setbggrey2(""),props.setplanvalue("Advanced"),props.setchosed("Advanced"),props.settotal(12)}} className={`border-[2px] border-[#ADADAD] hover:border-[#9C82BC] active:bg-[#ECECEC] max-[375px]:w-[150px] w-[125px] rounded-xl h-[140px] ${bggrey1}`}>
                    <img className=" ps-[10px] pt-[14px]" src={imgadvanced} alt="" />
                    <h5 className=" ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Advanced</h5>
                    <p className=" ps-[10px] text-xs font-bold text-[#ADADAD]">${advancedtxt}</p>
                </div>
                <div onClick={()=>{setbggrey(""),setbggrey1(""),setbggrey2("bg-[#ECECEC]"),props.setplanvalue("Pro"),props.setchosed("Pro"),props.settotal(15)}} className={`border-[2px] border-[#ADADAD] hover:border-[#9C82BC] active:bg-[#ECECEC] w-[125px] max-[375px]:w-[150px] rounded-xl h-[140px] ${bggrey2}`}>
                    <img className=" ps-[10px] pt-[14px]" src={imgpro} alt="" />
                    <h5 className=" ps-[10px] pt-8 text-sm font-bold text-[#03244F]">Pro</h5>
                    <p className=" ps-[10px] text-xs font-bold text-[#ADADAD]">${protxt}</p>
                </div>
            </div>
            <div className="max-[375px]:w-[290px] w-[400px] h-[50px] flex items-center justify-center bg-[#EDF3FD] gap-16">
                <h4 className={`font-bold ${monthly}`}>Monthly</h4>
                <input ref={ref} onChange={()=>{checkedbox=="bg-[#ECECEC]"?setcheckedbox(""):setcheckedbox("bg-[#ECECEC]")}} type="checkbox" className="toggle [--tglbg:rgb(2,41,90)] bg-white hover:bg-white border-white theme-controller " name="" id="" />
                <h4 className={`font-bold ${year}`}>Yearly</h4>
            </div>
        </div>
    )
}
