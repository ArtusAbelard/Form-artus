import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


export default function Cardadd(props) {
    const ref = useRef()
    const [laref, setlaref] = useState(ref)
    const [checkedbox, setcheckedbox] = useState("")
    const [checkedbox1, setcheckedbox1] = useState("")
    const [checkedbox2, setcheckedbox2] = useState("")
    useEffect(() => {
        console.log(laref.current.checked);
    }, [checkedbox])
    
    
    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center gap-2  items-center pe-5'>
            <h1 className="text-start w-[400px] font-bold text-3xl">Pick add-ons</h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm">Add-ons help enhance your gaming experience</p><br /> 
            <div className={`w-[400px] flex justify-center items-center h-[60px] ${checkedbox} hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input ref={ref} onChange={()=>{checkedbox=="bg-[#ECECEC]"?setcheckedbox(""):setcheckedbox("bg-[#ECECEC]"),props.setchecked(true)}} type="checkbox"  />
                <p className="ps-3 font-bold text-sm">Online service <br />
                <span className="text-[#ADADAD] text-xs font-medium">Access to multiplayer games</span></p>
                <p className="ps-[120px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"1":"10"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
            <div className={`w-[400px] flex justify-center items-center h-[60px] ${checkedbox1} hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input onChange={()=>{checkedbox1=="bg-[#ECECEC]"?setcheckedbox1(""):setcheckedbox1("bg-[#ECECEC]"),props.setchecked1(true)}} type="checkbox" />
                <p className="ps-3 font-bold text-sm">Larger storage <br />
                <span className="text-[#ADADAD] text-xs font-medium">Extra 1TB of cloud save</span></p>
                <p className="ps-[150px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
            <div className={`w-[400px] flex justify-center items-center h-[60px] ${checkedbox2} hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input onChange={()=>{checkedbox2=="bg-[#ECECEC]"?setcheckedbox2(""):setcheckedbox2("bg-[#ECECEC]"),props.setchecked2(true)}} type="checkbox" />
                <p className="ps-3 font-bold text-sm">Customizable Profile <br />
                <span className="text-[#ADADAD] text-xs font-medium">Custom theme on your profile</span></p>
                <p className="ps-[110px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
        </div>
    )
}