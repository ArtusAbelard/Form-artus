import React from "react";
import bgleft from "./../assets/img/bg-sidebar-desktop.svg"


export default function Leftcard(props) {
    

    return (
        <div className={`w-[250px] h-[465px] rounded-xl gap-6 bg-blue-800 ewa bg-cover flex flex-col justify-start pt-10 items-center`} style={{backgroundImage: `url(${bgleft})`}} >
            <div className="flex justify-center items-center gap-4 pe-9">
                <div onClick={()=>{props.setactive(1)}} className={`${props.active==1?'bg-white':'text-white'} h-[35px] w-[35px] border-white rounded-full flex items-center justify-center font-bold border-[2px]`}>1</div>
                <p className="text-sm text-white w-[90px]">step 1 <br /> <span className="font-bold">YOUR INFO</span></p>
            </div>
            <div className="flex justify-center items-center gap-4 pe-9">
                <div onClick={()=>{props.setactive(2)}} className={`${props.active==2?'bg-white':'text-white'} h-[35px] w-[35px] border-white rounded-full flex items-center justify-center font-bold border-[2px]`}>2</div>
                <p className="text-sm text-white w-[90px]">step 2 <br /> <span className="font-bold">SELECT PLAN</span></p>
            </div>
            <div className="flex justify-center items-center gap-4 pe-9">
                <div onClick={()=>{props.setactive(3)}} className={`${props.active==3?'bg-white':'text-white'} h-[35px] w-[35px] border-white rounded-full flex items-center justify-center font-bold border-[2px]`}>3</div>
                <p className="text-sm text-white w-[90px]">step 3 <br /> <span className="font-bold">ADD-ONS</span></p>
            </div>
            <div className="flex justify-center items-center gap-4 pe-9">
                <div onClick={()=>{props.setactive(4)}} className={`${props.active==4?'bg-white':'text-white'} h-[35px] w-[35px] border-white rounded-full flex items-center justify-center font-bold border-[2px]`}>4</div>
                <p className="text-sm text-white w-[90px]">step 4 <br /> <span className="font-bold">SUMMARY</span></p>
            </div>
        </div>
    )
}
