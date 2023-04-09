import React from "react"
import headset from "../assets/headset.svg"
const Hmsec1 = () =>{
    return(
        <div className=" bg-black flex m-auto" >
        <div>
            <h2 className="text-[#fff] text-3xl font-serif font-bold justify-between w-80 pt-[80px] pl-[60px]">
                When words fail, <span className="text-[#F20A0A]"> Music</span> speaks.
            </h2>
            <p className="text-[#fff] text-1xl italic pl-[60px] pt-6">This is the home of music!</p>
            <div className="leading-16 pl-16 pt-6">
                <button className="bg-[#fff] rounded-xl text-[#f20a0a] p-3">
                    Book an artiste.
                </button>
            </div>
            
        </div>
        <img src={headset} alt="" />
    </div> 
    )
}

export default Hmsec1
