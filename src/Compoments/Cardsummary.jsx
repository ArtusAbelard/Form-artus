import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Cardadd(props) {
    const [thetotal, setthetotal] = useState()
    useEffect(() => {
      if (props.moory=="Monthly") {
        setthetotal(props.total)
      }else{
        setthetotal(props.total*10)
      } 
      if (props.checked==true && props.moory=="Monthly") {
        setthetotal(thetotal=>thetotal+1)
      } else if (props.checked==true && props.moory=="Yearly"){
        setthetotal(thetotal=>thetotal+10)
      }
      if (props.checked1==true && props.moory=="Monthly") {
        setthetotal(thetotal=>thetotal+2)
      } else if (props.checked1==true && props.moory=="Yearly"){
        setthetotal(thetotal=>thetotal+20)
      }
      if (props.checked2==true && props.moory=="Monthly") {
        setthetotal(thetotal=>thetotal+2)
      } else if (props.checked2==true && props.moory=="Yearly"){
        setthetotal(thetotal=>thetotal+20)
      }
    }, [thetotal,props.checked,props.checked1,props.checked2])
    
    return (
        <div className='max-[375px]:ms-[50px]  max-[375px]:w-[200px] w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5'>
            <h1 className="max-[375px]:w-[200px] text-start w-[400px] font-bold text-3xl">Finishing up </h1>
            <p className="max-[375px]:w-[200px] text-start w-[400px] text-[#ADADAD] text-sm">Double-check everything looks OK before confirming.</p><br /> 
            <div className="max-[375px]:w-[250px] w-[400px] h-[200px] bg-[#F7F9FD] flex flex-col justify-center items-center rounded-xl gap-4">
                <div className={`max-[375px]:w-[200px] w-[350px] flex items-center justify-between`}>
                    <p className="text-[#17427F] font-bold">{props.planvalue}({props.moory}) <br />
                    <span onClick={()=>{props.setactive(2)}} className="text-[#ADADAD] border-b-[2px] font-medium text-xs">Change</span></p>
                    <p className="text-[#17427F] font-bold">${props.moory=="Monthly"&&props.chosed=="Arcade"?"9":props.moory=="Monthly"&&props.chosed=="Advanced"?"12":props.moory=="Monthly"&&props.chosed=="Pro"?"15":props.moory=="Yearly"&&props.chosed=="Arcade"?"90":props.moory=="Yearly"&&props.chosed=="Advanced"?"120":props.moory=="Yearly"&&props.chosed=="Pro"?"150":""}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className="max-[375px]:w-[200px] w-[350px] border-b-[2px]"></div>
                <div className={`max-[375px]:w-[200px] w-[350px] flex justify-between items-center ${props.checked==true?"":"hidden"}`}>
                    <p className="text-[#ADADAD] font-medium text-xs">Online sevice</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"1":"10"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className={`max-[375px]:w-[200px] w-[350px] flex justify-between items-center ${props.checked1==true?"":"hidden"}`}>
                    <p className="text-[#ADADAD] font-medium text-xs">Larger storage</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className={`max-[375px]:w-[200px] w-[350px] flex justify-between items-center ${props.checked2==true?"":"hidden"}`}>
                    <p className="text-[#ADADAD] font-medium text-xs">Customizable Profile</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
            </div>
            <div className="max-[375px]:w-[200px] w-[400px] h-[50px] flex justify-center items-center max-[375px]:gap-3 gap-[200px]">
                <p className="text-[#ADADAD] text-sm">Total ({props.moory=="Monthly"?"per month":"per year"})</p>
                <p className="font-bold text-[#3D36FE]">${thetotal}/{props.moory=="Monthly"?"mo":"yr"}</p>
            </div>
        </div>
    )
}