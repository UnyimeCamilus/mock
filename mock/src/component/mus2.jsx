import React from "react";
import firstday from "../assets/firstday.svg";
import found from "../assets/found.svg";
import go_cash from "../assets/go_cash.svg";
import gun from "../assets/gun.svg";
import four from "../assets/four.svg";
import hoodboy from "../assets/hoodboy.svg";
import lip from "../assets/lip.svg";
import numb from "../assets/numb.svg"



const Mus2 = () =>{
    return(
        <div>
            <div className="flex justify-center gap-16 pb-8">
                <img src={firstday} alt="" />
                <img src={four} alt="" />
            </div>
            <div className="flex justify-center gap-16 pb-8">
                <img src={found} alt="" />
                <img src={hoodboy} alt="" />
            </div>
            <div className="flex justify-center gap-16 pb-8">
                <img src={go_cash} alt="" />
                <img src={lip} alt="" />
            </div>
            <div className="flex justify-center gap-16 pb-16">
                <img src={gun} alt="" />
                <img src={numb} alt="" />
            </div>
        </div>
    )
}
export default Mus2