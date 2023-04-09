import React from "react";
import bookimg from "../assets/bookimg.svg";


const Bookind = () =>{
    return(
        <div>
            <div className="flex  bg-[#222222] text-[#fff] justify-center items-center text-3xl ">
                <img src={bookimg} alt="" />
                <p className="">Book a studio session today!</p>
            </div>
        </div>
    );
};
export default Bookind