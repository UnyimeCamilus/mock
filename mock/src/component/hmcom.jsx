import React from "react";
import loveclip from "../assets/loveclip.svg";
import Northface from "../assets/Northface.svg";
import p_g from "../assets/p_g.svg";
import tat_net from "../assets/tat_net.svg";
import panco from "../assets/panco.svg";
import victory from "../assets/victory.svg";


const Hmcom = () =>{
    return(
        <div className="bg-[#E5E5E5] ">
            <div className=" p-12 justify-center flex-grid ">
                <div className="flex text-center gap-24 pl-28 pb-16">
                    <img src={loveclip} alt="" />
                    <img src={Northface} alt="" />
                    <img src={p_g} alt="" />
                </div>
                <div className="flex pl-28 gap-24 pb-8">
                    <img src={tat_net} alt="" />
                    <img src={panco} alt="" />
                    <img src={victory} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hmcom