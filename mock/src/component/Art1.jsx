import React from "react"
import search from "../assets/search.svg";
import abby_jasmine from "../assets/abby_jasmine.svg";
import broke_asf from "../assets/broke_asf.svg";
import co_cash from "../assets/co_cash.svg";
import brianna_castro from "../assets/brianna_castro.svg";
import benny_blanco from "../assets/benny_blanco.svg";
import contra_dash from "../assets/contra_dash.svg";
import aviici from "../assets/aviici.svg";
import badt_gayl from "../assets/badt_gayl.svg";
import kitty_cash from "../assets/kitty_cash.svg";


const Art1 = () =>{
    return(
        <div>
            <div className="flex justify-around gap-80 pt-16 ">
                <h6 className="text-base font-semibold text-[#000000]">
                    Meet our Top Artistes
                </h6>
                <div className="flex shadow-2xl border-[#222222] rounded-xl border-2 p-2 ">
                <input type="text" placeholder="search" />
                <img src={search} alt="" />
                </div>
            </div>
            <div className="flex justify-center gap-20 pb-8 pt-4 leading-10">
                <div>
                    <img src={abby_jasmine} alt="" />
                    <p>abby_jasmine</p>
                    <img src={broke_asf} alt="" />
                    <p>broke_asf</p>
                    <img src={co_cash} alt="" />
                    <p>co_cash</p>
                </div>
                <div>
                    <img src={brianna_castro} alt="" />
                    <p>brianna_castro</p>
                    <img src={benny_blanco} alt="" />
                    <p>benny_blanco</p>
                    <img src={contra_dash} alt="" />
                    <p>contra_dash</p>
                </div>
                <div>
                    <img src={aviici} alt="" />
                    <p>aviici</p>
                    <img src={badt_gayl} alt="" />
                    <p>badt_gayl</p>
                    <img src={kitty_cash} alt="" />
                    <p>kitty_cash </p>
                </div>
            </div>
        </div>
    )
}
export default Art1