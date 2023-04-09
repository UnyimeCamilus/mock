import React from "react";
import bookaudio from "../assets/bookaudio.svg";
import fotlogo from "../assets/fotlogo.svg";

const Booki = () =>{
    return(
        <div>
            <div className="flex text-[#000000] gap-20 pl-20 pb-24 justify-between">
                
                <form>
                    <h4 className=" text-lg mt-20">Book a Studio Session!</h4>
                    <div className="p-9 shadow border-gray-200 rounded-xl w-72 border-2 ">

                    <label htmlFor="Full Name:">Full Name:</label>
                    <input type="text" placeholder="Tunde eli" required/>
                    <br />
                    <label htmlFor="Full Name:">Stage Name:</label>
                    <input type="text" placeholder="Tuneli" />
                    <br />
                    <label htmlFor="Full Name:">Email address:</label>
                    <input type="text" placeholder="@qwerasd.com" />
                    <br />
                    <label htmlFor="duration:">Duration/Hours:</label>
                    <input type="number" placeholder="4" />
                    <br />
                    <label htmlFor="date:">Date:</label>
                    <input type="Date" placeholder="DDMMYY" />
                    <br />
                    <button className="bg-[#F20A0A] text-[#fff] rounded-md p-2 w-36 mt-8">Book a session</button>

                    </div>
                    
                </form>

                <div className="bg-[#222222] text-[#fff] w-auto  pt-8 ">
                    <img src={bookaudio} alt="" />
                    <div className="pl-80 pt">
                    <img src={fotlogo} alt="" />
                    </div>
                    <p className="w-80 ml-72">Book a studio session with us and work with
                        our talented and experienced producers.
                    </p>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Booki