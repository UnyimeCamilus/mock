import React from "react";
import mic from "../assets/mic.svg";

const Hmsec3 = () =>{
    return(
        <div className="flex gap-12 m-28 ">
                <img src={mic} alt="" />
                <div>
                    <p className="pb-8 w-96 text-[#000000] font-normal">
                        We license, distribute and publish rich musiccal
                       content for artistes, song writers and producers.
                    </p>
                    <p className="w-72">We have a transparent structure ensuring that revenues
                        made through content distribution get to these artistes,
                        producers and songwriters as due them.

                        We are a music company that is more artistic with extra
                        support that ensures result for our signed talents.
                    </p>
                    <button className="bg-[#000] rounder-xl text-[#fff] p-3 mt-4">
                        Learn more
                    </button>
                </div>
        </div>
    )
}

export default Hmsec3