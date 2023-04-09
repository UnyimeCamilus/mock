import React from "react";
import red_gurl from "../assets/red_gurl.svg";
import black_gurl from "../assets/black_gurl.svg";
import yellow_gurl from "../assets/yellow_gurl.svg";

const Hmsec2 = ()=>{
    return(
        <div className=" flex justify-center gap-12 pt-12">
                <div>
                <p className="w-[400px] pt-20 pb-8 text-[#000000] text-2xl font-semi-normal">
                 We are home to the very best talents & artistes, leading the  music industry.
                </p>
                <p className="w-48 text-base pb-4  ">
                Mocking by Jay has maintained a strong and innovative
                push to promote capacity building and creativity that
                showcase the richness and diversity of the Music
                culture via story-telling.
                </p>
                <button className="bg-[#000] rounder-xl text-[#fff] p-3">
                Learn more
                </button>
                </div>
                <div className="flex gap-4 ">
                    <img src={red_gurl} alt="" />
                    <img src={black_gurl} alt="" />
                    <img src={yellow_gurl} alt="" />
                </div>
            </div>
            
    )
}

export default Hmsec2