
import logo from "../assets/mock_logo.svg";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="flex justify-between items-center bg-[#f1f6ff] pr-[80px] pl[80px] pt-[20px] pb-[30px] w-full">
            <img src={logo} alt="#"                                                                                                                                                                                                                                                                                                                             />
            <nav className="md:flex md:visible invisible gap-20">
                <ul className="flex gap-20 text-[#000000] cursor-pointer">
                    <li className="border-2 border-[#f1f6ff] border-b-[#F20A0A]">
                        <Link to="/">HOME</Link>
                    </li>

                    <li>
                        <Link to="/artistes">ARTISTES</Link>
                    </li>
                    
                    <li>
                        <Link to="/music">MUSIC</Link>
                    </li>
                    <li>VIDEO</li>
                </ul>
                
                    <button className="text-[#F20A0A] bg-[#f1f6ff]">
                    <Link to="/booking"> BOOK A SESSION</Link>
                    </button>
            </nav>

        </header>
    );
};

export default Header