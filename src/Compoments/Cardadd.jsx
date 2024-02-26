import React from "react";

export default function Cardadd(props) {
    

    return (
        <div className='w-[500px] h-[400px] rounded-xl flex flex-col justify-center gap-2  items-center pe-5'>
            <h1 className="text-start w-[400px] font-bold text-3xl">Pick add-ons</h1>
            <p className="text-start w-[400px] text-[#ADADAD] text-sm">Add-ons help enhance your gaming experience</p><br /> 
            <div className="w-[400px] flex justify-center items-center h-[60px] hover:border-[#9C82BC] rounded-xl border-[2px]" >
                <input type="checkbox" />
                <p className="ps-3 font-bold text-sm">Online service <br />
                <span className="text-[#ADADAD] text-xs font-medium">Access to multiplayer games</span></p>
                <p className="ps-[120px] font-bold text-[#61329C]">+$10/yr</p>
            </div>
            <div className="w-[400px] flex justify-center items-center h-[60px] hover:border-[#9C82BC] rounded-xl border-[2px]" >
            <input type="checkbox" />
                <p className="ps-3 font-bold text-sm">Larger storage <br />
                <span className="text-[#ADADAD] text-xs font-medium">Extra 1TB of cloud save</span></p>
                <p className="ps-[150px] font-bold text-[#61329C]">+$20/yr</p>
            </div>
            <div className="w-[400px] flex justify-center items-center h-[60px] hover:border-[#9C82BC] rounded-xl border-[2px]" >
            <input type="checkbox" />
                <p className="ps-3 font-bold text-sm">Customizable Profile <br />
                <span className="text-[#ADADAD] text-xs font-medium">Custom theme on your profile</span></p>
                <p className="ps-[110px] font-bold text-[#61329C]">+$20/yr</p>
            </div>
        </div>
    )
}