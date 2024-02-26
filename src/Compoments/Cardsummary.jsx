import React from "react";

export default function Cardadd(props) {
    

    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5'>
            <h1 className="text-start w-[400px] font-bold text-3xl">Finishing up </h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm">Double-check everything looks OK before confirming.</p><br /> 
            <div className="w-[400px] h-[200px] bg-[#F7F9FD] flex flex-col justify-center items-center rounded-xl gap-4">
                <div className="w-[350px] flex items-center justify-between">
                    <p className="text-[#17427F] font-bold">{props.planvalue}({props.moory}) <br />
                    <span className="text-[#ADADAD] border-b-[2px] font-medium text-xs">Change</span></p>
                    <p className="text-[#17427F] font-bold">${props.moory=="Monthly"&&props.chosed=="Arcade"?"9":props.moory=="Monthly"&&props.chosed=="Advanced"?"12":props.moory=="Monthly"&&props.chosed=="Pro"?"15":props.moory=="Yearly"&&props.chosed=="Arcade"?"90":props.moory=="Yearly"&&props.chosed=="Advanced"?"120":props.moory=="Yearly"&&props.chosed=="Pro"?"150":""}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className="w-[350px] border-b-[2px]"></div>
                <div className="w-[350px] flex justify-between items-center">
                    <p className="text-[#ADADAD] font-medium text-xs">Online sevice</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"1":"10"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className="w-[350px] flex justify-between items-center">
                    <p className="text-[#ADADAD] font-medium text-xs">Larger storage</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
                <div className="w-[350px] flex justify-between items-center ">
                    <p className="text-[#ADADAD] font-medium text-xs">Customizable Profile</p>
                    <p className="text-[#17427F] font-bold">+${props.moory=="Monthly"?"2":"20"}/{props.moory=="Monthly"?"mo":"yr"}</p>
                </div>
            </div>
            <div className="w-[400px] h-[50px] flex justify-center items-center gap-[200px]">
                <p className="text-[#ADADAD] text-sm">Total (per year)</p>
                <p className="font-bold text-[#3D36FE]">$120/yr</p>
            </div>
        </div>
    )
}Yearly