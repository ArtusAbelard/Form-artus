import React from "react"
import imgthnks from "./../assets/img/icon-thank-you.svg"

export default function Thankyou(props) {
    

    return (
        <div className="w-[500px] h-[400px] rounded-xl flex flex-col justify-center items-center pe-5">
            <img src={imgthnks} alt="" />
            <h1 className="pt-5 font-extrabold text-2xl">Thank you!</h1>
            <p className="text-center text-sm text-[#ADADAD]">Thanks for confiming your subscription! We hope you have <br />
            fun using our platform. if you ever need support, please <br />
            feel free to email us at support@loremgaming.com.</p>
            
        </div>
    )
}
