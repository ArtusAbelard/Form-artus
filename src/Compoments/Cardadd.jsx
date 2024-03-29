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

        
    }, [checkedbox])
    
    return (
        <div className='max-[375px]:ms-[50px]  max-[375px]:w-[200px] w-[500px] h-[400px] rounded-xl flex flex-col justify-center gap-2 max-[375px]:gap-4  items-center pe-5'>
            <h1 className="max-[375px]:w-[200px] text-start w-[400px] font-bold text-3xl">Pick add-ons</h1>
            <p className="max-[375px]:w-[200px] text-start w-[400px] text-[#ADADAD] text-sm">Add-ons help enhance your gaming experience</p><br /> 
            <div onClick={()=>{props.checked==true?props.setchecked(false):props.setchecked(true)}} className={`max-[375px]:w-[220px] w-[400px] flex justify-center items-center h-[60px] ${checkedbox} ${props.checked==true?"bg-[#ECECEC]":""}  hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input ref={ref} onChange={()=>{checkedbox=="bg-[#ECECEC]"?setcheckedbox(""):setcheckedbox("bg-[#ECECEC]"),props.checked==true?props.setchecked(false):props.setchecked(true)}} checked={props.checked==true?true:false} type="checkbox"  />
                <p className="ps-3 font-bold text-sm">Online service <br />
                <span className="text-[#ADADAD] text-xs font-medium">Access to multiplayer games</span></p>
                <p className="max-[375px]:ps-0 ps-[120px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"1":"10"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
            <div onClick={()=>{props.checked1==true?props.setchecked1(false):props.setchecked1(true)}} className={`max-[375px]:w-[220px] w-[400px] flex justify-center items-center h-[60px] ${checkedbox1} ${props.checked1==true?"bg-[#ECECEC]":""} hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input onChange={()=>{checkedbox1=="bg-[#ECECEC]"?setcheckedbox1(""):setcheckedbox1("bg-[#ECECEC]"),props.checked1==true?props.setchecked1(false):props.setchecked1(true)}} checked={props.checked1==true?true:false} type="checkbox" />
                <p className="ps-3 font-bold text-sm">Larger storage <br />
                <span className="text-[#ADADAD] text-xs font-medium">Extra 1TB of cloud save</span></p>
                <p className="max-[375px]:ps-0 ps-[150px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
            <div onClick={()=>{props.checked2==true?props.setchecked2(false):props.setchecked2(true)}} className={`max-[375px]:h-[150px] max-[375px]:w-[220px] w-[400px] flex justify-center items-center h-[60px] ${checkedbox2} ${props.checked2==true?"bg-[#ECECEC]":""} hover:border-[#9C82BC] rounded-xl border-[2px]`} >
                <input onChange={()=>{checkedbox2=="bg-[#ECECEC]"?setcheckedbox2(""):setcheckedbox2("bg-[#ECECEC]"),props.checked2==true?props.setchecked2(false):props.setchecked2(true)}} checked={props.checked2==true?true:false} type="checkbox" />
                <p className="ps-3 font-bold text-sm">Customizable Profile <br />
                <span className="text-[#ADADAD] text-xs font-medium">Custom theme on your profile</span></p>
                <p className="max-[375px]:ps-0 ps-[110px] font-bold text-[#61329C]">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
        </div>
    )
}