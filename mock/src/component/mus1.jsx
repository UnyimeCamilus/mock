import React from "react"
import menu_bar from "../assets/menu_bar.svg";
import menubar from "../assets/menubar.svg";

const Mus1 = () =>{
    return(
        <div className="flex justify-around  pt-8 pb-16 ">
            <h4>music</h4>
            <div className="flex gap-2">
                <img src={menubar} alt="" />
                <img src={menu_bar} alt="" />
            </div>
            <hr className="text-[#F20A0A] border-b-4"/>
            

        </div>
    );
};
export default Mus1